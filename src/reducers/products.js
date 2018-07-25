import actionTypes from '../constants/actionTypes';

const initialState = {
    list: [{
        id: 1,
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. ',
        image: 'patagonia.jpg',
        price: 92,
        highlights: false
    },{
        id: 2,
        name: 'Cerveza Quilmes',
        description: 'La cerveza de siempre, exponsor oficial de la Seleccion Argentina. ',
        image: 'quilmes.jpg',
        price: 35,
        highlights: true
    },{
        id: 3,
        name: 'Cerveza Chuy',
        description: 'Bien fria como cabeza de pelado en invierno. ',
        image: 'norte.jpg',
        price: 15,
        highlights: false
    },{
        id: 3,
        name: 'Cerveza Chivo',
        description: 'Para todos los chivos que andan sueltos. ',
        image: 'norte.jpg',
        price: 45,
        highlights: true
    }]
};

const productsReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PRODUCTS_GET_LIST: {
            return state;
        }

        default:
            return state;
    }

};

export default productsReducer;