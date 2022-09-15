//funcion callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, callback) {
    let res = op1 + op2;
    callback(`resultado: ${res}`);
}

sumar(5, 3, imprimir);
//llamadas asincronas con uso de setTimeout

function miFuncionCallback() {
    console.log("saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function() { console.log("saludo asincrono 2") }, 4000);