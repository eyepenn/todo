import CRUDStore from './CRUDStore';

const CRUDActions = {

	create(newRecord) {
		let data = CRUDStore.getData();
		data.unshift(newRecord);
		CRUDStore.setData(data);
	},

	delete(recordID) {
		let data = CRUDStore.getData();
		data.splice(recordID, 1);
		CRUDStore.setData(data);
	}
};

export default CRUDActions