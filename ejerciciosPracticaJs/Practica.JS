

//Suma todos los números pares del 1 al 50: Utiliza un bucle para sumar todos los números pares del 1 hasta el 50 y muestra el resultado de la suma con console log.
let suma = 0;

for (let i = 0; i<= 50; i++) {
    if (i % 2 == 0) {
        suma += i;
    }
}

console.log ("la suma es", suma) ;

//Factorial: Para este último desafío, necesitamos multiplicar todos los números del 1 al 20. Es decir, 1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final?

let multiplicacion = 1;

for (let i = 1; i<= 20; i++) {
        multiplicacion *= i;
}
console.log (multiplicacion);
 

/*¡Ahora es tu turno! Es hora de crear algunas pizzas increíbles. Sigue estas sencillas instrucciones:

Crea una función llamada `pizzaOven`. ¡Asegúrate de incluir los detalles de tu pizza como el tipo de corteza, salsa, quesos y salsas!
Crea una función llamada `pizzaOven` que devuelva un objeto JavaScript (¡una deliciosa pizza!)
Crea una pizza con: “estilo Chicago”, “tradicional”, [“mozzarella”] y [“pepperoni”, “salchicha”]
Crea una pizza con: “lanzada a mano”, “marinara”, [“mozzarella”, “feta”] y [“champiñones”, “aceitunas”, “cebollas”]
¡Crea otras dos pizzas con tus ingredientes favoritos y deja volar tu imaginación! */

function pizzaOven(corteza,salsa,quesos,salsas){ 
    var pizza = {
        corteza: corteza,
        salsa: salsa,
        queso: quesos,
        salsas: salsas

    };
    return pizza;
}

    var pizza1= pizzaOven ("Estilo Chicago", "Tradicional", ["Mozarella"], ["peperoni", "salchichas"]);
    console.log(pizza1);


