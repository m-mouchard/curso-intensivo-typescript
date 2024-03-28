"use strict";
function iniciarEntrada() {
    let boton = document.getElementById("botonIntroOperacion");
    boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", cogerOperacion);
}
function cogerOperacion() {
    let tipoOp = document.getElementById("tipo_operacion");
    let fechaOp = document.getElementById("fecha_operacion");
    let conceptoOp = document.getElementById("concepto");
    let importeOp = document.getElementById("importe");
    let ivaOp = document.getElementById("iva");
    let metodoOp = document.getElementById("metodo_cobro");
    console.log(metodoOp.value);
}
window.onload = iniciarEntrada;
