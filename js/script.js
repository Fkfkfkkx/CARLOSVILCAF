function alert1() { alert("Este es el mensaje de alerta 1"); }
function alert2() { alert("Este es el mensaje de alerta 2"); }
function alert3() { alert("Este es el mensaje de alerta 3"); }
function alert4() { alert("Este es el mensaje de alerta 4"); }
function alert5() { alert("Este es el mensaje de alerta 5"); }
function alert6() { alert("Este es el mensaje de alerta 6"); }

// pa la pagima
function cambiarFondo() {
    document.body.style.background = 
    document.body.style.background === "black" ? "#f4f4f4" : "black";
}

function cambiarTexto() {
    document.body.style.color = 
    document.body.style.color === "white" ? "black" : "white";
}

function agrandar() {
    document.body.style.fontSize = "22px";
}

function achicar() {
    document.body.style.fontSize = "16px";
}

// pa cambiar el tecto
function cambiarTitulo() {
    document.querySelector("h1").innerText = "Título cambiado con JavaScript";
}

function cambiarSubtitulo() {
    document.querySelector("h3").innerText = "Subtítulo cambiado con JavaScript";
}
