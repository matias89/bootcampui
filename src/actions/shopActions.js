import actionTypes from '../constants/actionTypes';

const addProduct = (name, price, img) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		price,
		img
	}
});

const removeAllProduct = (item) => ({
	type: actionTypes.SHOP_REMOVE_ALL_PRODUCT,
	payload: item
});

const removeProduct = (item) => ({
	type: actionTypes.SHOP_REMOVE_PRODUCT,
	payload: item
});


export default { addProduct, removeAllProduct, removeProduct };