import {
    ADD_INIT_STATE,
    ADD_QUANTITY,
    ADD_SHIPPING,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    SUB_SHIPPING
} from "../actions";

let initState = {
    items: [],
    size: 0,
    addItems: [],
    total: 0
};

const articulos = (state = initState, action) => {
    switch (action.type) {
        case ADD_INIT_STATE:
            initState.items = action.data.CatalogEntryView;
            initState.size = action.data.recordSetTotal;
            return {...state};
        case ADD_TO_CART:
            let addItem = state.items.find(item => item.uniqueID === action.id);
            let existed_item = state.addItems.find(item => item.uniqueID === action.id);
            if (existed_item) {
                addItem.cantidad += 1;
                return {
                    ...state,
                    total: state.total + parseInt(addItem.Price[0].priceValue, 10)
                }
            } else {
                addItem.cantidad = 1;
                let newTotal = state.total + parseInt(addItem.Price[0].priceValue, 10);
                return {
                    ...state,
                    addItems: [...state.addItems, addItem],
                    total : newTotal
                }
            }
        case ADD_QUANTITY:
            let addQuantity = state.items.find(item => item.uniqueID === action.id);
            addQuantity.cantidad += 1;
            let newTotal = state.total + parseInt(addQuantity.Price[0].priceValue, 10);
            return{
                ...state,
                total: newTotal
            };
        case SUB_QUANTITY:
            let subQuantity = state.items.find(item => item.uniqueID === action.id);
            if(subQuantity.cantidad === 1) {
                let new_items = state.addItems.filter(item => item.uniqueID !== action.id);
                let restarCantidad = state.total - parseInt(subQuantity.Price[0].priceValue, 10);
                return {
                    ...state,
                    addItems: new_items,
                    total: restarCantidad
                }
            } else {
                subQuantity.cantidad -= 1;
                let restarCantidad = state.total - parseInt(subQuantity.Price[0].priceValue, 10);
                return {
                    ...state,
                    total: restarCantidad
                }
            }
        case REMOVE_ITEM:
            let itemToRemove = state.addItems.find(item=> item.uniqueID === action.id);
            let new_items = state.addItems.filter(item=> item.uniqueID !== action.id);
            let totalEliminar = state.total - (parseInt(itemToRemove.Price[0].priceValue, 10) * itemToRemove.cantidad);
            return{
                ...state,
                addItems: new_items,
                total: totalEliminar
            };
        case ADD_SHIPPING:
            console.log(action);
            return {
                ...state,
                total: state.total + action.precioEnvio
            };
        case SUB_SHIPPING:
            console.log(action);
            return {
                ...state,
                total: state.total - action.precioEnvio
            };
        default:
            return state;
    }
};

export default articulos;