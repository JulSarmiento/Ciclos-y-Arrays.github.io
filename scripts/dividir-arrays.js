//Dividir arrays
//Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero). 
//Crear un array para los números pares, otro para los impares y un tercero para almacenar datos no numéricos.
//Mostrar los resultados al finalizar el ciclo.

let numberTwo; 
let impar= [];
let par = [];

const resultTwo = document.getElementById('result-two');

function handleTwo() {

    while(numberTwo !== 0 ) {

        numberTwo = prompt('Ingrese sus números aquí y para terminar escriba "0".');
    
        if(numberTwo === 0 || numberTwo === null ){
            resultOne.innerHTML =
                `<div>
                    <h3>¡Resultado!</h3>
                    <p>${values}</p>
                </div>`;
            return;

        } else if(isNaN(numberOne)) {
            continue;

        } else {
            values.push(numberOne);
        };
    };
   
};