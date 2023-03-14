/*
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const btn = document.querySelector('button');
const boxDadoUtente = document.querySelector('.box-dado-utente');
const boxDadoComputer = document.querySelector('.box-dado-computer');
const risultato = document.querySelector('.result');

btn.addEventListener('click', function(){
    dadoUtente = getRndInteger(1, 6);
    dadoComputer = getRndInteger(1, 6);
    boxDadoUtente.innerHTML = `
        <h3>Dado utente</h3>
        <h2 class="text-center">${dadoUtente}</h2>
    `;
    boxDadoComputer.innerHTML = `
        <h3>Dado computer</h3>
        <h2 class="text-center">${dadoComputer}</h2>
    `;
    
    if(dadoUtente > dadoComputer){
        risultato.classList.add('bg-success');
        risultato.classList.remove('bg-danger');
        risultato.classList.remove('bg-dark-subtle');
        risultato.innerHTML = `
            <span class="fs-1 text-white">Hai vinto</span>
        `
    } else if(dadoUtente < dadoComputer){
        risultato.classList.add('bg-danger');
        risultato.classList.remove('bg-success');
        risultato.classList.remove('bg-dark-subtle');
        risultato.innerHTML = `
            <span class="fs-1 text-white">Hai perso</span>
        `
    } else {
        risultato.classList.add('bg-dark-subtle');
        risultato.classList.remove('bg-success');
        risultato.classList.remove('bg-danger');
        risultato.innerHTML = `
            <span class="fs-1 text-white">Pareggio</span>
        `
    }
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}