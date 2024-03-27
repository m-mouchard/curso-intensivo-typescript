
function cogerBoton() {
    let boton = document.getElementById("botonCalc");
    boton?.addEventListener("click",logicaBoton);
}

function logicaBoton() {
    let inputPeso = document.getElementById("inputPeso") as HTMLInputElement;
    let inputAltura = document.getElementById("inputAlt") as HTMLInputElement;
    if (inputPeso.value !== "" && inputAltura.value !== "") {
        let peso:number = parseFloat(inputPeso.value);
        let altura:number = parseFloat(inputAltura.value);
        let resultado = peso/(altura*altura);
        imprimirPantalla(resultado);
    } else {
        alert("Introduce valores");
    }
}

cogerBoton();

function imprimirPantalla(resultado:number) {
    let result = resultado.toFixed(2);
    let htmlElement = document.getElementById("resultado");
    //let htmlString = htmlElement.textContent;
    if (htmlElement) {
        htmlElement.textContent = `Tu IMC es: ${result}`;        
    }
}