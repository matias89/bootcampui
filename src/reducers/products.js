import actionTypes from "../constants/actionTypes";

const initialState = {
  list: [
    {
      name: "Remera fea",
      description: "Remera extremadamente fea, casi imposible de usar.",
      stat: "Carisma +20",
      price: 91
    },
    {
      name: "Remera linda",
      description: "Wow, es tan linda, tenes que comprarla.",
      stat: "Levante +70",
      price: 92
    },
    {
      name: "Jean roto",
      description: "Un jean roto, super a la moda",
      stat: "Levante +20   Frio +15",
      price: 93
    },
    {
      name: "Kilt",
      description: "Deci lo que quieras, pero va a seguir siendo una pollera",
      stat: "Carisma +40   Frio +80   Comodidad +120",
      price: 94
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
