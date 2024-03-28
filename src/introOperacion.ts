function iniciarEntrada() {
    let boton = document.getElementById("botonIntroOperacion");
    boton?.addEventListener("click",cogerOperacion);
}

function cogerOperacion() {
    let tipoOp = document.getElementById("tipo_operacion") as HTMLInputElement;    
    let fechaOp = document.getElementById("fecha_operacion") as HTMLInputElement;
    let conceptoOp = document.getElementById("concepto") as HTMLInputElement;
    let importeOp = document.getElementById("importe") as HTMLInputElement;
    let ivaOp = document.getElementById("iva") as HTMLInputElement;
    let metodoOp = document.getElementById("metodo_cobro") as HTMLInputElement;

    console.log(metodoOp.value);
}

window.onload = iniciarEntrada;