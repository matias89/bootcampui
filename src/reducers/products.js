import actionTypes from '../constants/actionTypes';

const initialState = {
    list: [{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. ',
        image: 'patagonia.jpg',
        price: 92,
        highlights: false,
        category: 'cerveza'
    },{
        name: 'Cerveza Quilmes',
        description: 'La cerveza de siempre, exponsor oficial de la Seleccion Argentina. ',
        image: 'quilmes.jpg',
        price: 35,
        highlights: true,
        category: 'cerveza'
    },{
        name: 'Cerveza Corona',
        description: 'Ideal bien fria con limon. ',
        image: 'corona.jpg',
        price: 60,
        highlights: false,
        category: 'cerveza'
    },{
        name: 'Cerveza Chivo',
        description: 'Para todos los chivos que andan sueltos. ',
        image: 'chivo.jpg',
        price: 45,
        highlights: true,
        category: 'cerveza'
    },{
        name: 'Fernet Branca',
        description: 'Gusto robusto solo para machos. ',
        image: 'branca.jpg',
        price: 205,
        highlights: true,
        category: 'fernet'
    },{
        name: 'Fernet Vittone',
        description: 'Para cuando te queres suicidar, seguro revienta el higado. ',
        image: 'vittone.jpg',
        price: 15,
        highlights: false,
        category: 'fernet'
    },{
        name: 'Fernet 1882',
        description: 'Cuando no hay pal branca pero no te queres morir. ',
        image: '1882.jpg',
        price: 170,
        highlights: false,
        category: 'fernet'
    },{
        name: 'Johnnie Walker',
        description: 'Cuando te queres hacer el cheto. ',
        image: 'redlabel.jpg',
        price: 250,
        highlights: true,
        category: 'whisky'
    },{
        name: 'Chivas Regal',
        description: 'Sos chivo por eso tomas chivas. ',
        image: 'chivas.jpg',
        price: 400,
        highlights: true,
        category: 'whisky'
    },{
        name: 'Coca Cola',
        description: 'Por que no hay otra. ',
        image: 'coca.jpg',
        price: 60,
        highlights: false,
        category: 'gaseosas'
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