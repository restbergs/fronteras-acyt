
function tituloAbout() {
    let titulo = document.getElementById("titulo");
    let encabezado = document.getElementById("encabezado");
    let subtitulo = document.getElementById("subtitulo");
    let A = document.getElementById("A");
    let C = document.getElementById("C");
    let Y = document.getElementById("Y");
    let T = document.getElementById("T");
    titulo.className = "tituloAbout";
    encabezado.className= "encabezadoAbout";
    subtitulo.className = "subtituloAbout";
    A.className = "boton-nav_about";
    C.className = "boton-nav_about";
    Y.className = "boton-nav_about";
    T.className = "boton-nav_about";
}
function tituloHome() {
    let titulo = document.getElementById("titulo");
    let encabezado = document.getElementById("encabezado");
    let subtitulo = document.getElementById("subtitulo");
    let A = document.getElementById("A");
    let C = document.getElementById("C");
    let Y = document.getElementById("Y");
    let T = document.getElementById("T");
    titulo.className = "tituloHome"
    encabezado.className = "encabezadoHome";
    subtitulo.className = "subtituloHome";
    A.className = "boton-nav_home";
    C.className = "boton-nav_home";
    Y.className = "boton-nav_home";
    T.className = "boton-nav_home";
}
window.onload = function () {
    document.getElementById("A").onclick = tituloAbout;
    document.getElementById("C").onclick = tituloHome;
    document.getElementById("Y").onclick = tituloHome;
    document.getElementById("T").onclick = tituloHome;
}