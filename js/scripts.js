'use strict'

let cajaTexto = document.querySelector('textarea');

let mostrar = ()=>{
    let texto = document.querySelector('textarea').value;
    let contador = document.querySelector('.contador');

    // Separa los espacios + las palabras entran en un arreglo
    let arreglo = texto.split(" ");
    
    let suma = 0;
    for(let i of arreglo){
       suma += i.length;
    }
    
    if(suma == 0){
        contador.innerText = '';
    }else{
        contador.innerText = suma;
        if(suma < 25){
            contador.classList.remove('amarillo');
            contador.classList.remove('rojo')
        }else if(suma >= 25 && suma <30){
            contador.classList.add('amarillo');
        }else if(suma >= 30){
            contador.classList.remove('amarillo');
            contador.classList.add('rojo');
        }
    }
}

    cajaTexto.addEventListener('keyup', mostrar); 
    // Actualiza el Dom según las palabras en la caja de texto
    document.addEventListener("DOMContentLoaded", mostrar);



 