/*
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

    creare un array con le email accettate
*/

const emailConsentite = ['daca9621@gmail.com', 'davidecaputo@gmail.com', 'caputodavide@gmail.com', 'davcap@gmail.com'];
console.log(emailConsentite);

const boxEmail = document.getElementById('email');
const btnEmail = document.querySelector('button');
const risultato = document.querySelector('.result');

btnEmail.addEventListener('click', function () {
    let controllo = '';
    email = boxEmail.value;
    if ((email) && isNaN(email)){
        for(i = 0; i < emailConsentite.length; i++){
            if(email == emailConsentite[i]){
                controllo = 'corretto';
            }
        }
        if (controllo){
            risultato.innerHTML = `
                <h2 class="bg-body-secondary mt-4 rounded-5 text-center text-success w-75">Email accettata</h2>
            `
        } else {
            risultato.innerHTML = `
            <h2 class="bg-body-secondary mt-4 rounded-5 text-center text-danger w-75">Questa email non è presente nella lista</h2>
            `
        }
    } else {
        risultato.innerHTML = `
            <h2 class="text-white mt-4">Devi inserire un email</h2>
            `
    }
});