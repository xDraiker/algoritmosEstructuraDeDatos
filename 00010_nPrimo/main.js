let number=977;

/* 
* Función para determinar si un número es primo o no 
* No se toma en consideración number < 0 (Se debe añadir validación) 
*/
function nPrimo(n){
    for(let i=1;i<=n;i++){
        if((n%i==0 && (i!=n && i!=1)) || (n==1)) return `${n} no es un número primo`;
    }
    return `${n} es un número primo`;
}

console.log(nPrimo(number));


