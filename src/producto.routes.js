const express = require('express');
const router = express.Router();

const productoController = require('./producto.controller');

router.get('/', productoController.obtenerProductos);

router.get('/:id', productoController.obtenerProducto);

router.post('/', productoController.agregarProducto);

router.put('/:id', productoController.editarProducto);

router.delete('/:id', productoController.eliminarProducto);

module.exports = router;