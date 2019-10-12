// Declaración de variables que se ocuparan como tipo
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const SUB_SHIPPING = 'SUB_SHIPPING';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_INIT_STATE = 'ADD_INIT_STATE';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const CHECK_BD = 'CHECK_BD';

// llamado de todas las acciones que se ocuparan para el reducer
export const addInitState = (data) => {
    return {
        type: ADD_INIT_STATE,
        data
    }
};

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
};

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
};

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
};

export const addShipping = (precioEnvio) => {
    return {
        type: ADD_SHIPPING,
        precioEnvio
    }
};

export const subShipping = (precioEnvio) => {
    return {
        type: SUB_SHIPPING,
        precioEnvio
    }
};

export const checkBD = () => {
    return {
        type: CHECK_BD,
    }
}
