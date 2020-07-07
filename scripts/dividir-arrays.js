//Dividir arrays
//Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero). 
//Crear un array para los números pares, otro para los impares y un tercero para almacenar datos no numéricos.
//Mostrar los resultados al finalizar el ciclo.
const resultTwo = document.getElementById('result-two');

function handleTwo() {

    let numberTwo; 
    let impar= [];
    let par = [];
    let other = [];  

    while(numberTwo !== '0' ) {

        numberTwo = prompt('Ingrese sus números aquí y para terminar escriba "0".');
    
        if(numberTwo === '0' || numberTwo === null ){
            return;

        } else if(numberOne === '') {
            return;

        }else if( numberTwo % 2 == 0) {
            par.push(numberTwo);

        } else if( numberTwo % 2 == 1) {
            impar.push(numberTwo);

        }else {
            other.push(numberTwo);
        ;
    };

    resultTwo.innerHTML = 
        `<div class="results">

            <h3>¡Resultado!</h3>

            <h4>Números pares</h4>
            <p class="p">${par}</p>

            <h4>Números impares</h4>
            <p class="p">${impar}</p>

            <h4>Otros valores ingresados</h4>
            <p class="p">${other}</p>

        </div>`;
   
    };
};
