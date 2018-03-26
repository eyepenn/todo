import {EventEmitter} from 'fbemitter';

let data;
let schema;

const emitter = new EventEmitter();

const CRUDStore = {

	init(initialSchema) {
		schema = initialSchema;
		const storage = 'localStorage' in window
		? localStorage.getItem('data')
		: null;
		if (!storage) {
			data = [{}];
			schema.forEach(task => data[0][task.id] = task.sample);
		} else {
			data = JSON.parse(storage);
		}
	},

	getData() {
		return data;
	},

	getSchema() {
		return schema;
	},

	setData(newData, commit = true) {
		data = newData;
		if(commit && 'localStorage' in window) {
			localStorage.setItem('data', JSON.stringify(newData));
		}
		emitter.emit('change');
	},

	addListener(eventType, fn) {
		emitter.addListener(eventType, fn);
	}

}

export default CRUDStore