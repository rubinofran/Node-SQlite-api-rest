/* const Producto = require('./producto.model'); */

const { bd, nombreTabla } = require('./database');

const productoController = {};

productoController.obtenerProductos = async (req, res) => {
    const query = `SELECT * FROM ${nombreTabla}`;   
    bd.all(query, [], (err, result) => {
        if(err) {
            res.json({ "error": err.message });
            return;
        }
        res.json(result)
    });
}

productoController.obtenerProducto = async (req, res) => {
    const query = `SELECT * FROM ${nombreTabla} WHERE id = ?`;
    bd.get(query, [req.params.id], (err, result) => {
        if(err) {
            res.json({ "error": err.message });
            return;
        }
        res.json(result);
    });
}

productoController.agregarProducto = async (req, res) => {
    const { nombre, marca, precioXUnidad, cantidad } = req.body;
    const query = `INSERT INTO ${nombreTabla} (nombre, marca, precioXUnidad, cantidad) VALUES (?, ?, ?, ?)`;
    bd.run(query, [nombre, marca, precioXUnidad, cantidad], (err, resultado) => {
        if(err) {
            res.json({ "error": err.message });
            return;
        }
        res.json({ status: 'Producto guardado en la BD' });
    })
}

productoController.editarProducto = async (req, res) => {
    const { nombre, marca, precioXUnidad, cantidad } = req.body;
    const query = `UPDATE ${nombreTabla} SET nombre = ?, marca = ?, precioXUnidad = ?, cantidad = ? WHERE id = ?`;
    bd.run(query, [nombre, marca, precioXUnidad, cantidad, req.params.id], (err, resultado) => {
        if(err) {
            res.json({ "error": err.message });
            return;
        }
        res.json({ status: 'Producto actualizado en la BD' });
    })
}

productoController.eliminarProducto = async (req, res) => {
    const query = `DELETE FROM ${nombreTabla} WHERE id = ?`;
    bd.run(query, [req.params.id], (err, resultado) => {
        if(err) {
            res.json({ "error": err.message });
            return;
        }
        res.json({ status: 'Producto eliminado de la BD' });
    });
}

module.exports = productoController;