import actionTypes from '../constants/actionTypes';

const initialState = {
    orders: [],
    total: 0
};

const shopReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SHOP_ADD_PRODUCT: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload],
                total: state.total + action.payload.price
            });
        }
        case actionTypes.SHOP_REMOVE_PRODUCT: {
            return {
                orders: [
                    ...state.orders.slice(0, action.payload),
                    ...state.orders.slice(action.payload + 1)
                ],
                total: state.total - state.orders[action.payload].price
            };
        }
        case actionTypes.SHOP_REMOVE_ALL_PRODUCT: {
            return initialState
        }

        default:
            return state;
    }

};

export default shopReducer;