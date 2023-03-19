"use strict";
let number=1;

/* 
* Función para determinar si un número es primo o no 
* No se toma en consideración number < 0 (Se debe añadir validación) 
*/
function nPrimo(n){
    for(let i=1;i<=n;i++){
        if((n%i==0 && (i!=n && i!=1)) || (n==1)) return false;
        if(i>(n/2)) return true;
    }
}

console.log(nPrimo(number)? `${number} es un número primo`:`${number} no es un número primo`);


