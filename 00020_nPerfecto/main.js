"use strict";
let number=496;

/* 
* Función para determinar si un número es perfecto
* No se toma en consideración number < 0 (Se debe añadir validación) 
*/
function obtenerDivisores(n){
    let divisores = [];
    for(let i=0;i<=n/2;i++){
        if(n%i==0) divisores.push(i);
    }
    return divisores;
}
function nPerfecto(n){
    let suma = obtenerDivisores(n).reduce((n1,n2) => n1+n2 );
    if (suma==n) return true;
    else return false;
}
console.log(nPerfecto(number)? `${number} es un número perfecto`:`${number} no es un número perfecto`);


