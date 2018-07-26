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
        case actionTypes.SHOP_REMOVE_PRODUCT: {         
            return {
                orders: [
                  ...state.orders.slice(0, action.payload),
                  ...state.orders.slice(action.payload + 1)
                ]
              };
        }
        case actionTypes.SHOP_REMOVEALL_PRODUCT: {         
            return initialState;
        }

        default:
            return state;
    }

};



export default shopReducer;