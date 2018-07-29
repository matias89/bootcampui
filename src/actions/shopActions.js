import actionTypes from '../constants/actionTypes';

const addProduct = (name, price) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		price
	}
});

const clearShop = () => ({
  type: actionTypes.SHOP_CLEAR
});

const deleteProduct = (index) => ({
  type: actionTypes.SHOP_DELETE_PRODUCT,
  payload: index
});

export default { addProduct, clearShop, deleteProduct };