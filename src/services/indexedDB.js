const dbVersion = 1;

export default () => {

    const request = indexedDB.open("articulos", dbVersion);

    request.onerror = (e) => {
        console.log('Database Error', e);
    };

    request.onsuccess = (e) => {
        console.log('Database Opened');
    };

    request.onupgradeneeded = (e) => {
        const db = e.target.result;
        db.createObjectStore('itemList', { keyPath: 'valor' });
        db.createObjectStore('total', { keyPath: 'valor' });
        db.createObjectStore('totalElementos', { keyPath: 'valor' });
    };

    return request;
}
