class Persona {

    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get edad() {
        return this._edad;
    }

    set nombre(nombre) {
        return this._nombre;
    }

    set apellido(apellido) {
        return this._apellido;
    }

    set edad(edad) {
        return this._edad;
    }

    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._apellido} ${this._edad}`;

    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }
    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(fechaRegistro) {

        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//Prueba clase Persona

let persona1 = new Persona("Juan", "Perez", 28);
console.log(persona1.toString());

let persona2 = new Persona("Jhon", "Salcedo", 27);
console.log(persona2.toString());

let empleado1 = new Empleado();