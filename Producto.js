class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    set precio(precio) {
        return this._precio = precio;

    }
    toString() {
        return this._idProducto + " " + this._nombre + " " + this._precio;
    }

}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get _idOrden() {
        return this._idOrden;
    }

    agregarProducto() {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        } else {
            console.log("No se puede agregar mas productos");
        }

    }
}
let producto1 = new Producto("jhon", 300);
console.log(producto1.toString());
let producto2 = new Producto("marco", 400);
console.log(producto2.toString());