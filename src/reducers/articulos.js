import {
    ADD_INIT_STATE,
    ADD_QUANTITY,
    ADD_SHIPPING,
    ADD_TO_CART,
    CHECK_BD,
    REMOVE_ITEM,
    SUB_QUANTITY,
    SUB_SHIPPING
} from "../actions";
import {addDB, getDB} from "../services/functionDB";

let initState = {
    items: [],
    size: 0,
    addItems: [],
    total: 0,
    totalElementos: 0
};

const articulos = (state = initState, action) => {
    switch (action.type) {
        case CHECK_BD:
            getDB();
            break;
        case ADD_INIT_STATE:
            const valores = getDB();
            if (valores != null && valores.length > 0) {
                initState.items = action.data.CatalogEntryView;
                valores.forEach(valor => {
                    if (valor.total) {
                       initState.total = parseInt(valor.total, 10);
                    } else if (valor.totalElementos) {
                        initState.totalElementos = parseInt(valor.totalElementos,10)
                    } else if (valor.itemList) {
                        const divisionItems = valor.itemList.split(",");
                        const articulosDB = [];
                        divisionItems.forEach(item => {
                            const division = item.split("-");
                            let addItem = state.items.find(item => item.uniqueID === division[0]);
                            addItem['cantidad'] = parseInt(division[1], 10);
                            articulosDB.push(addItem)
                        });
                        initState.addItems = articulosDB;
                    }
                });
            } else {
                initState.items = action.data.CatalogEntryView;
                initState.size = action.data.recordSetTotal;
            }
            return {...state};
        case ADD_TO_CART:
            let addItem = state.items.find(item => item.uniqueID === action.id);
            let existed_item = state.addItems.find(item => item.uniqueID === action.id);
            let totalElementos = state.totalElementos + 1;
            if (existed_item) {
                addItem.cantidad += 1;
                const val = {
                    ...state,
                    total: state.total + parseInt(addItem.Price[0].priceValue, 10),
                    totalElementos: totalElementos
                };
                addDB(val);
                return val;
            } else {
                addItem.cantidad = 1;
                let newTotal = state.total + parseInt(addItem.Price[0].priceValue, 10);
                const val = {
                    ...state,
                    addItems: [...state.addItems, addItem],
                    total : newTotal,
                    totalElementos: totalElementos
                };
                addDB(val);
                return val;
            }
        case ADD_QUANTITY:
            let addQuantity = state.items.find(item => item.uniqueID === action.id);
            addQuantity.cantidad += 1;
            let newTotal = state.total + parseInt(addQuantity.Price[0].priceValue, 10);
            let totalElementosAdd = state.totalElementos + 1;
            const addValor = {
                ...state,
                total: newTotal,
                totalElementos: totalElementosAdd
            };
            addDB(addValor);
            return addValor
        case SUB_QUANTITY:
            let subQuantity = state.items.find(item => item.uniqueID === action.id);
            let totalElementosSub = state.totalElementos - 1;
            if(subQuantity.cantidad === 1) {
                let new_items = state.addItems.filter(item => item.uniqueID !== action.id);
                let restarCantidad = state.total - parseInt(subQuantity.Price[0].priceValue, 10);
                const subValor = {
                    ...state,
                    addItems: new_items,
                    total: restarCantidad,
                    totalElementos: totalElementosSub
                }
                addDB(subValor);
                return subValor;
            } else {
                subQuantity.cantidad -= 1;
                let restarCantidad = state.total - parseInt(subQuantity.Price[0].priceValue, 10);
                const subValor = {
                    ...state,
                    total: restarCantidad,
                    totalElementos: totalElementosSub
                }
                addDB(subValor);
                return subValor;
            }
        case REMOVE_ITEM:
            let itemToRemove = state.addItems.find(item=> item.uniqueID === action.id);
            let new_items = state.addItems.filter(item=> item.uniqueID !== action.id);
            let totalEliminar = state.total - (parseInt(itemToRemove.Price[0].priceValue, 10) * itemToRemove.cantidad);
            let totalElementosRemove = state.totalElementos - itemToRemove.cantidad;
            const removeItem = {
                ...state,
                addItems: new_items,
                total: totalEliminar,
                totalElementos: totalElementosRemove
            };
            addDB(removeItem);
            return removeItem;
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
