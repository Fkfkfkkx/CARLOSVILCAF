// --- 6 alerts  ---
function alert1(){ alert("Hola Gosha! (1)"); }
function alert2(){ alert("Este es otro mensaje (2)"); }
function alert3(){ alert("Mensaje número 3"); }
function alert4(){ alert("Mensaje especial (4)"); }
function alert5(){ alert("Mensaje emergente (5)"); }
function alert6(){ alert("Último mensaje (6)"); }

// --- 4 CAMBIOS pa la pagina ---
function fondoNegro(){
    document.body.style.background = "black";
    document.body.style.color = "white";
}

function fondoBlanco(){
    document.body.style.background = "white";
    document.body.style.color = "black";
}

function textoRojo(){
    document.body.style.color = "red";
}

function agrandarTexto(){
    document.body.style.fontSize = "20px";
}

// -- pa cambiar texto ---
function cambiarTitulo(){
    document.getElementById("titulo").textContent = "Título cambiado por JavaScript";
}

function cambiarSubtitulo(){
    document.getElementById("subtitulo").textContent = "Subtítulo actualizado automáticamente";
}
