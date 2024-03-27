"use strict";
function cogerBoton() {
    let boton = document.getElementById("botonCalc");
    boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", logicaBoton);
}
function logicaBoton() {
    let inputPeso = document.getElementById("inputPeso");
    let inputAltura = document.getElementById("inputAlt");
    if (inputPeso.value !== "" && inputAltura.value !== "") {
        let peso = parseFloat(inputPeso.value);
        let altura = parseFloat(inputAltura.value);
        let resultado = peso / (altura * altura);
        imprimirPantalla(resultado);
    }
    else {
        alert("Introduce valores");
    }
}
cogerBoton();
function imprimirPantalla(resultado) {
    let result = resultado.toFixed(2);
    let htmlElement = document.getElementById("resultado");
    //let htmlString = htmlElement.textContent;
    if (htmlElement) {
        htmlElement.textContent = `Tu IMC es: ${result}`;
    }
}
