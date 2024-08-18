// constructor (): Inicializa el carrito como un array vacío.
class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
    
    aplicarDescuento(porcentaje) {
        const descuento = this.calcularTotal() * (porcentaje / 100);
        return this.calcularTotal() - descuento;
    }
}

module.exports = CarritoCompra;
