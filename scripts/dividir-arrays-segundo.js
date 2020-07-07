//Dividir Arrays
//Ingresar mediante prompt cualquier carácter hasta el ingreso de un 0 (cero). 
//Almacenar cada ingreso en una posición del array.
//Al finalizar dividir la cantidad de elementos en 3 arrays iguales

const resultFour = document.getElementById('result-four');

function handleFour() {

    let numberFour; 
    let principalArray = [];

    while(numberFour !== '0' ) {

        numberFour = prompt('Ingrese sus números aquí y para terminar escriba "0".');
    
        if(numberFour === '0' || numberFour === null ){

            const len = Math.floor(principalArray.length / 3); 

            const arrayOne = principalArray.slice(0, len);
            const arrayTwo = principalArray.slice(len, len * 2);  
            const arrayThree = principalArray.slice(len * 2, len *3);        

            resultFour.innerHTML = 
                `<div class="results">
        
                    <h3>¡Resultado!</h3>
        
                    <h4>Lista original</h4>
                    <p class="p">${principalArray}</p>
        
                    <h4>Primera lista</h4>
                    <p class="p">${arrayOne}</p>
        
                    <h4>Segunda lista</h4>
                    <p class="p">${arrayTwo}</p>
        
                    <h4>Tercera lista</h4>
                    <p class="p">${arrayThree}</p>
        
                </div>`;

            return;

        } else if(numberFour.length > 0) {
        
            principalArray.push(numberFour);
        };
    };
   
};

