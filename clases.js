class Persona {

    static contadorPersonas = 0;

    static get MAX_OBJ() {
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log("Se han superado el maximo de objetos permitidos ");
        }
        this.idPersona = Persona.contadorPersonas++;

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
        return this.idPersona + " " + this._nombre + "" + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
    static saludar() {
        console.log("saludos desde metodos static")
    }
    static saludar2(persona) {
        console.log(persona.nombre);

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
console.log(persona1.toString());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Karla", "Ramirez");
console.log(Persona.contadorPersonas);
console.log(persona2.toString);

console.log(Persona.MAX_OBJ);