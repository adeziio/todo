const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    const sql = 'CREATE TABLE IF NOT EXISTS todos (id integer primary key, item)';
    db.run(sql);
});

class Data {
    constructor(id, item) {
        this.id = id;
        this.item = item;
    }

    static all(callback) {
        db.all('SELECT * FROM todos', callback);
    };

    static add(item) {
        const sql = 'INSERT INTO todos(item) VALUES(?)';
        db.run(sql, item);
    };

    static update(id, item, callback) {
        const sql = 'UPDATE todos SET item = ? WHERE id = ?';
        db.run(sql, item, id, callback);
    };

    static delete(id, callback) {
        const sql = 'DELETE FROM todos where id = ?';
        db.run(sql, id, callback);
    };
}

module.exports = Data;