//Eliminar extremos 
//Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero).
//Almacenar en un array solamente los números. Eliminar del array el número más alto y el más bajo.

const resultThree = document.getElementById('result-three');

function handleThree() {

    let numberThree; 
    let list = [];
    let listModified = [];

    while(numberThree !== '0' ) {

        numberThree = prompt('Ingrese sus números aquí y para terminar escriba "0".');
    
        if(numberThree === '0' || numberThree === null ){

            const minNumber  = Math.min(...list);
            const maxNumber = Math.max(...list); 

            listModified = list.filter(function(value) {
                //Value mayor al minimo y menor al maximo 
                return value > minNumber && value < maxNumber;
            });

            resultThree.innerHTML = 
                `<div class="results">
        
                    <h3>¡Resultado!</h3>

                    <h4>Lsita original:</h4>
                    <p class="p">${list}</p>

                    <h4>Lsita organizada:</h4>
                    <p class="p">${list.sort()}</p>

                    <h4>Lsita modificada:</h4>
                    <p class="p">${listModified}</p>
                    
                </div>`;
   
            return;

        } else if(isNaN(numberThree)) {
            alert('Por favor ingresa un número. No se aceptan letras ni caracteres diferentes.')
            return;
            
        } else {
            list.push(numberThree);
          
        };

    };

};









