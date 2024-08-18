// carritoCompra.test.js
const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('agregarProducto() agrega un producto al carrito', () => {
        const producto = { nombre: 'Camisa', precio: 20 };
        carrito.agregarProducto(producto);
        expect(carrito.productos.length).toBe(1);
    });

    test('calcularTotal() calcula el total de la compra correctamente', () => {
        const productos = [
            { nombre: 'Camisa', precio: 20 },
            { nombre: 'Pantalón', precio: 30 },
            { nombre: 'Zapatos', precio: 50 }
        ];
        productos.forEach(producto => carrito.agregarProducto(producto));
        expect(carrito.calcularTotal()).toBe(100);
    });

    test('aplicarDescuento() aplica el descuento correctamente', () => {
        const productos = [
            { nombre: 'Camisa', precio: 20 },
            { nombre: 'Pantalón', precio: 30 },
            { nombre: 'Zapatos', precio: 50 }
        ];
        productos.forEach(producto => carrito.agregarProducto(producto));
        expect(carrito.aplicarDescuento(10)).toBe(90);
    });
});
