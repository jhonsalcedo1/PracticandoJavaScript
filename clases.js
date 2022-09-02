class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        return this._apellido = apellido;
    }
    nombreCompleto() {
        return this._nombre + "" + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
}


class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        this._departamento;
    }
    set departamento(departamento) {
            this._departamento = departamento;
        }
        //sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + "" + this._departamento;
    }
}
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());