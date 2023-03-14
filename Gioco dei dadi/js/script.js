/*
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const btn = document.querySelector('button');
const boxDadoUtente = document.querySelector('.box-dado-utente');
const boxDadoComputer = document.querySelector('.box-dado-computer');

btn.addEventListener('click', function(){
    dadoUtente = getRndInteger(1, 6);
    dadoComputer = getRndInteger(1, 6);
    boxDadoUtente.innerHTML = `
        <h2 class="text-center">${dadoUtente}</h2>
    `;
    boxDadoComputer.innerHTML = `
        <h2 class="text-center">${dadoComputer}</h2>
    `;
    
    if(dadoUtente > dadoComputer){
        console.log('Hai vinto');
    } else if(dadoUtente < dadoComputer){
        console.log('Hai perso');
    } else {
        console.log('Pareggio');
    }
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}