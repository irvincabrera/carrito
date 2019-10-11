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
    total: 0,
    totalElementos: 0
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
            let totalElementos = state.totalElementos + 1;
            if (existed_item) {
                addItem.cantidad += 1;
                return {
                    ...state,
                    total: state.total + parseInt(addItem.Price[0].priceValue, 10),
                    totalElementos: totalElementos
                }
            } else {
                addItem.cantidad = 1;
                let newTotal = state.total + parseInt(addItem.Price[0].priceValue, 10);
                return {
                    ...state,
                    addItems: [...state.addItems, addItem],
                    total : newTotal,
                    totalElementos: totalElementos
                }
            }
        case ADD_QUANTITY:
            let addQuantity = state.items.find(item => item.uniqueID === action.id);
            addQuantity.cantidad += 1;
            let newTotal = state.total + parseInt(addQuantity.Price[0].priceValue, 10);
            let totalElementosAdd = state.totalElementos + 1;
            return{
                ...state,
                total: newTotal,
                totalElementos: totalElementosAdd
            };
        case SUB_QUANTITY:
            let subQuantity = state.items.find(item => item.uniqueID === action.id);
            let totalElementosSub = state.totalElementos - 1;
            if(subQuantity.cantidad === 1) {
                let new_items = state.addItems.filter(item => item.uniqueID !== action.id);
                let restarCantidad = state.total - parseInt(subQuantity.Price[0].priceValue, 10);
                return {
                    ...state,
                    addItems: new_items,
                    total: restarCantidad,
                    totalElementos: totalElementosSub
                }
            } else {
                subQuantity.cantidad -= 1;
                let restarCantidad = state.total - parseInt(subQuantity.Price[0].priceValue, 10);
                return {
                    ...state,
                    total: restarCantidad,
                    totalElementos: totalElementosSub
                }
            }
        case REMOVE_ITEM:
            let itemToRemove = state.addItems.find(item=> item.uniqueID === action.id);
            let new_items = state.addItems.filter(item=> item.uniqueID !== action.id);
            let totalEliminar = state.total - (parseInt(itemToRemove.Price[0].priceValue, 10) * itemToRemove.cantidad);
            let totalElementosRemove = state.totalElementos - itemToRemove.cantidad;
            return{
                ...state,
                addItems: new_items,
                total: totalEliminar,
                totalElementos: totalElementosRemove
            };
        case ADD_SHIPPING:
            const totalAdd = state.total + action.precioEnvio;
            return {
                ...state,
                total: totalAdd
            };
        case SUB_SHIPPING:
            const totalSub = state.total - action.precioEnvio;
            return {
                ...state,
                total: totalSub
            };
        default:
            return state;
    }
};

export default articulos;