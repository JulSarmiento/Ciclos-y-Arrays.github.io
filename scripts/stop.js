// Stop
// Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese “Stop”.
// Almacenar todos los datos en un array y mostrarlos al final.

let numberOne; 
let values = [];

const resultOne = document.getElementById('result-one');

function handleOne() {

    while(numberOne !== 'stop' ) {

        numberOne = prompt('Ingrese su número aqui: ');
    
        if(numberOne === null || numberOne === 'stop'){
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












//Eliminar extremos 
//Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero).
//Almacenar en un array solamente los números. Eliminar del array el número más alto y el más bajo.

//Dividir Arrays
//Ingresar mediante prompt cualquier carácter hasta el ingreso de un 0 (cero). 
//Almacenar cada ingreso en una posición del array.
//Al finalizar dividir la cantidad de elementos en 3 arrays iguales
