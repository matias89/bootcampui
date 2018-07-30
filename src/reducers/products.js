import actionTypes from "../constants/actionTypes";

const initialState = {
  list: [
    {
      name: "Remera",
      description: "Remera extremadamente fea, casi imposible de usar.",
      stat: "Carisma +20",
      price: 150,
      img: 'https://cdn.shopify.com/s/files/1/1755/5355/products/mock-22-1771-FFFFFF-nh-s-18693126330484312501488825718-3_1800x.png?v=1488825742'
    },
    {
      name: "Remera fea",
      description: "Wow, es tan linda, tenes que comprarla.",
      stat: "Levante +70",
      price: 110,
      img: 'https://cdn.shopify.com/s/files/1/1755/5355/products/mock-22-1771-FC50AA-nh-ns-24189537298526732831488825709-3_1000x.png?v=1488825742'
    },
    {
      name: "Jean roto",
      description: "Un jean roto, super a la moda y super frio.",
      stat: "Levante +20   Frio +15",
      price: 200,
      img: 'https://ae01.alicdn.com/kf/HTB15KnsQpXXXXXMXpXXq6xXFXXX1/Rodilla-agujero-roto-cadena-hombres-negro-Jean-moda-casual-slim-fit-Denim-Pantalones-masculino-mendigos-pantalones.jpg_640x640.jpg'
    },
    {
      name: "Kilt",
      description: "Deci lo que quieras, pero va a seguir siendo una pollera",
      stat: "Comodidad +120",
      price: 920,
      img: 'https://images-na.ssl-images-amazon.com/images/I/81%2Bu6zJ5YIL._UL1500_.jpg'
    }
  ]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_GET_LIST: {
      return state;
    }

    default:
      return state;
  }
};

export default productsReducer;
