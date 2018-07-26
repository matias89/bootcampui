import actionTypes from '../constants/actionTypes';

const addProduct = (name, description, price) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		description,
		price
	}
});

const removeProduct = (item) => ({
	type: actionTypes.SHOP_REMOVE_PRODUCT,
	payload: item
});

const removeAllProducts = (item) => ({
	type: actionTypes.SHOP_REMOVEALL_PRODUCT,
	payload: item
});

export default { addProduct, removeProduct, removeAllProducts };