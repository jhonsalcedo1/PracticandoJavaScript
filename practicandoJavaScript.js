//fundcion constructora de objetos
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
console.log(padre);




let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function() {
        return this.nombre + this.apellido;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara",

}

//uso de call 
//para usar el metodo persona1.Completo para usar en la persona 2
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));




let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 40,
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase;
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " , " + this.apellido;
    }
}

persona.tel = "933237867"
console.log(persona.nombre);


console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = "en";

















/*
console.log(persona["apellido"]);

for (nombrePersona in persona) {
    console.log(nombrePersona);
    console.log(persona[nombrePersona]);
}

console.log(persona);

delete persona.tel;

console.log(persona);

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(persona);
*/