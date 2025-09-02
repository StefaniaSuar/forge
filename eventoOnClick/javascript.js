//Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a “Cerrar sesión”.
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
    this.innerText = "Cerrar sesion";
} );

// Cuando se da clic en “Agregar definición” el botón debe desaparecer.
var btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
    this.remove();
});


// Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando que te gusto la definición junto con el título de la misma.
var botones = document.querySelectorAll(".btn2");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        var titulo = boton.parentElement.querySelector(".titulo2").innerText;
        alert("Gato atigrado was liked");
    });
});

/*Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.*/

var botones = document.querySelectorAll(".btn2");
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        this.innerText = (parseInt(this.innerText) + 1) + " me gusta";
    });
}
