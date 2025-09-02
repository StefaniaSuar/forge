// ¡Vamos a resolver FizzBuzz! Aquí está la misión: recorreremos los números del 1 al 100 y haremos lo siguiente:
//Si el número es divisible por 3, imprimiremos “Fizz”.
//Si el número es divisible por 5, imprimiremos “Buzz”.
//Si el número es divisible por ambos 3 y 5, imprimiremos “FizzBuzz”.
/*
for(let i= 0; i<=1000; i++){

    if(i%3==0 && i%5 ==0 ){
        console.log("fizzbuz");
    }
    else if(i%3 == 0){
        console.log ("fizz");
    }
    else if (i%5 ==0 ){
        console.log("buzz");

    }
    else {
        console.log(i);
    }
}
    */

//Imprimir pares del 1 al 30: Usando un bucle, escribe un código que imprima todos los números pares del 1 al 30. ¡Veamos si puedes resolverlo!

for(let i= 1 ; i <= 30 ; i ++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

//Imprimir múltiplos de 4 en orden descendente: Utilizando un bucle, escribe un código que imprima todos los números que sean múltiplos de 4 en orden descendente, desde 100 hasta 0. ¡Inténtalo!

for (let i =100 ; i>=0 ; i--){
    if(i%4 == 0){
        console.log(i)
    }
}   

//Imprime la secuencia: Esta vez, queremos imprimir una secuencia un poco diferente. Utiliza un bucle para imprimir los siguientes valores: 10, 7, 4, 1, -2, -5.

for (let i=10 ; i>=-5; i-3){
    console.log(i);
}

//