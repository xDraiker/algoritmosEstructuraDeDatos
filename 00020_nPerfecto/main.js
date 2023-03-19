"use strict";
let number=496;

/* 
* Funciones para determinar si un número es perfecto
* No se toma en consideración number < 0 (Se debe añadir validación) 
*/
function obtenerDivisores(n){
    let sumaDiv=0;
    for(let i=1;i<=(n/2);i++){
        if(n%i==0) sumaDiv+=i;
    }
    return sumaDiv;
}
function nPerfecto(n){
    let suma = obtenerDivisores(n);
    if (suma==n) return true;
    else return false;
}
console.log(nPerfecto(number)? `${number} es un número perfecto`:`${number} no es un número perfecto`);


