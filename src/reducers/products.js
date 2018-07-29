import actionTypes from '../constants/actionTypes';

const initialState = {
    list: [{
        name: 'Cerveza Corona',
        description: 'La que toma el pelado de rapido y furioso. Una cerveza de estilo inglés(pero mexicana (?)) con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 30,
        img: 'https://products2.imgix.drizly.com/ci-corona-extra-17ddab5e602499d2.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20'
    },{
        name: 'Cerveza Olvidame Ya',
        description: 'No sabes que tiene, nosotros no sabemos que tiene. Solo te podemos decir que fue hecha en Santiago del Estero, no nos animamos a preguntar mas. Se recomendia no beber cerca de seres queridos. ',
        price: 5,
        img: 'https://cdn.shopify.com/s/files/1/1072/0968/products/330ml-Standard-400x600_large_87a53daf-f5ec-471a-bbc7-ea59334f03e9_grande.jpeg?v=1490967294'
    },{
        name: 'Cerveza Miller',
        description: 'Cerveza importada, para cuando te mandan a comprar cervezas y no queres quedar como el rata del grupo, gracias al agregado del impuesto, da una sensacion fuerte y duradera al bolsillo.',
        price: 60,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41XLN4Qm6AL.jpg'
    },{
        name: 'Cerveza Corona',
        description: 'La que toma el pelado de rapido y furioso. Una cerveza de estilo inglés(pero mexicana (?)) con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 30,
        img: 'https://products2.imgix.drizly.com/ci-corona-extra-17ddab5e602499d2.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20'
    },{
        name: 'Cerveza Olvidame Ya',
        description: 'No sabes que tiene, nosotros no sabemos que tiene. Solo te podemos decir que fue hecha en Santiago del Estero, no nos animamos a preguntar mas. Se recomendia no beber cerca de seres queridos. ',
        price: 5,
        img: 'https://cdn.shopify.com/s/files/1/1072/0968/products/330ml-Standard-400x600_large_87a53daf-f5ec-471a-bbc7-ea59334f03e9_grande.jpeg?v=1490967294'
    },{
        name: 'Cerveza Miller',
        description: 'Cerveza importada, para cuando te mandan a comprar cervezas y no queres quedar como el rata del grupo, gracias al agregado del impuesto, da una sensacion fuerte y duradera al bolsillo.',
        price: 60,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41XLN4Qm6AL.jpg'
    },{
        name: 'Cerveza Corona',
        description: 'La que toma el pelado de rapido y furioso. Una cerveza de estilo inglés(pero mexicana (?)) con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 30,
        img: 'https://products2.imgix.drizly.com/ci-corona-extra-17ddab5e602499d2.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20'
    },{
        name: 'Cerveza Olvidame Ya',
        description: 'No sabes que tiene, nosotros no sabemos que tiene. Solo te podemos decir que fue hecha en Santiago del Estero, no nos animamos a preguntar mas. Se recomendia no beber cerca de seres queridos. ',
        price: 5,
        img: 'https://cdn.shopify.com/s/files/1/1072/0968/products/330ml-Standard-400x600_large_87a53daf-f5ec-471a-bbc7-ea59334f03e9_grande.jpeg?v=1490967294'
    },{
        name: 'Cerveza Miller',
        description: 'Cerveza importada, para cuando te mandan a comprar cervezas y no queres quedar como el rata del grupo, gracias al agregado del impuesto, da una sensacion fuerte y duradera al bolsillo.',
        price: 60,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41XLN4Qm6AL.jpg'
    },
    ]
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