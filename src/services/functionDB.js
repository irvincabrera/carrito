import DB from './indexedDB';

const onRequestError = (e) => {
    console.log('Database Error [articulos]', e);
};

let checkBDAdd = [];

export const addDB = (valor) => {
    const request = DB();
    request.onerror = onRequestError;
    request.onsuccess = (e) => {
        if (valor.total) {
            deleteTable('total', e);
            addTable('total', valor.total, e);
        } else {
            deleteTable('total', e);
        }
        if (valor.totalElementos) {
            deleteTable('totalElementos', e);
            addTable('totalElementos', valor.totalElementos, e);
        } else {
            deleteTable('totalElementos', e);
        }
        let conteo = "";
        if (valor.addItems.length > 0) {
            valor.addItems.forEach(item => {
                conteo = (conteo !== "" ? conteo + ",": conteo) + (item.uniqueID + "-" + item.cantidad);
            });
            deleteTable('itemList', e);
            addTable('itemList', conteo, e);
        } else {
            deleteTable('itemList', e);
        }
    }
};

export const getDB = () => {
    if (checkBDAdd.length === 0) {
        const request = DB();
        request.onerror = onRequestError;
        request.onsuccess = (e) => {
            const total = getAll('total', e);
            let array = [];
            total.onsuccess = function () {
                if (total.result.length > 0) {
                    array.push({total: total.result[0].valor})
                    const totalElementos = getAll('totalElementos', e);
                    totalElementos.onsuccess = function () {
                        if (totalElementos.result.length > 0) {
                            array.push({totalElementos: totalElementos.result[0].valor})
                            const itemList = getAll('itemList', e);
                            itemList.onsuccess = function () {
                                if (itemList.result.length > 0) {
                                    array.push({itemList: itemList.result[0].valor})
                                    if (array.length > 0) {
                                        checkBDAdd = array;
                                    }
                                }
                            };
                        }
                    };
                }
            };
        };
    } else {
        return checkBDAdd;
    }
};

function getAll(tabla, e) {
    const db = e.target.result;
    const transaction = db.transaction(tabla, 'readonly');
    const store = transaction.objectStore(tabla);
    const total = store.getAll();
    return total;
}

function addTable(tabla, data, e) {
    const db = e.target.result;
    const transaction = db.transaction(tabla, 'readwrite');
    const store = transaction.objectStore(tabla);
    store.put({ valor: data });
}

function deleteTable(tabla, e) {
    const db = e.target.result;
    const transaction = db.transaction(tabla, 'readwrite');
    const store = transaction.objectStore(tabla);
    const all = store.getAll();
    all.onsuccess = function() {
        const valor = all.result[0];
        if (valor) {
            store.delete(valor.valor);
        }
    }
}

export const destroy = () => {

};
