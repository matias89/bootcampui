import actionTypes from '../constants/actionTypes';

const addProduct = (name, description, price) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		description,
		price
	}
});

export default { addProduct };