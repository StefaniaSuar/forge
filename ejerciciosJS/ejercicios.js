

//Suma todos los números pares del 1 al 50: Utiliza un bucle para sumar todos los números pares del 1 hasta el 50 y muestra el resultado de la suma con console log.
let suma = 0;

for (let i = 0; i<= 50; i++) {
    if (i % 2 == 0) {
        suma += i;
    }
}

console.log ("la suma es", suma) ;

//Factorial: Para este último desafío, necesitamos multiplicar todos los números del 1 al 20. Es decir, 1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final?

let multiplicacion = 0;

for (let i = 0; i<= 20; i++) {
        multiplicacion *= i;
}
console.log (multiplicacion);
