const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const BDSOURCE = path.join(__dirname, 'BDproductos.sqlite.db')

const nombreTabla = 'productos';
const BDCREAR = `CREATE TABLE ${nombreTabla} (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            nombre VARCHAR (50),
            marca VARCHAR (50),
            precioXUnidad REAL DEFAULT 0,
            cantidad INTEGER DEFAULT 0);`;

let bd = new sqlite3.Database(BDSOURCE, err => {
    if(err) {
        console.error(err)
    } else {
        bd.run(BDCREAR, err => {
            err ? console.log('Accediendo a la BD') : console.log('Tabla creada, accediendo a la nueva BD');
        });
    }
})

module.exports ={ bd, nombreTabla};