import actionTypes from '../constants/actionTypes';

const initialState = {
    orders: []
};

const shopReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SHOP_ADD_PRODUCT: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload]
            });
        }

        default:
            return state;
    }

};

export default shopReducer;