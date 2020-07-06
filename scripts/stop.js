// Stop
// Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese “Stop”.
// Almacenar todos los datos en un array y mostrarlos al final.

const resultOne = document.getElementById('result-one');

function handleOne() {
    let numberOne; 
    let values = [];

    while(numberOne !== 'stop' ) {

        numberOne = prompt('Ingrese su número aqui: ');
    
        if(numberOne === null || numberOne === 'stop'){
            resultOne.innerHTML =
                `<div class="results">
                    <h3>¡Resultado!</h3>
                    <p class="p">${values}</p>
                </div>`;
            return;

        } else if(numberOne === '') {
            return;

        } else if(isNaN(numberOne)) {
            alert('Por favor ingresa un número. No se aceptan letras ni caracteres diferentes.')
            return;
        
        } else {
            values.push(numberOne);
        };
    };
   
};


//Dividir Arrays
//Ingresar mediante prompt cualquier carácter hasta el ingreso de un 0 (cero). 
//Almacenar cada ingreso en una posición del array.
//Al finalizar dividir la cantidad de elementos en 3 arrays iguales
' '