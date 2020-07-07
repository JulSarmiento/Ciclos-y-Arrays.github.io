const resultTwo = document.getElementById('result-two');

function handleTwo() {

    let numberTwo; 
    let impar= [];
    let par = [];
    let other = [];  

    while(numberTwo !== '0' ) {

        numberTwo = prompt('Ingrese sus números aquí y para terminar escriba "0".');
    
        if(numberTwo === '0' || numberTwo === null ){

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

            return;

        } else if(numberTwo.length === 0) {
            continue;

        }else if( numberTwo % 2 == 0) {
            par.push(numberTwo);

        } else if( numberTwo % 2 == 1) {
            impar.push(numberTwo);

        }else {
            other.push(numberTwo);
        }
    };
};
