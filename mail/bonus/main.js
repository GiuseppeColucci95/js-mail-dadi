/* 
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//create an array with emails
const mails = [
  "colucci539@gmail.com",
  "giusepperossi@yahoo.it",
  "francescoverdi@gmail.com",
  "giuseppeverdi@outlook.it",
  "mariorossi@libero.it"
];
console.log(mails);

//ask to the user his email
const userMail = prompt("Inserisci la tua mail: [es: giuseppecolucci@libero.it]");
console.log(userMail);

//check if the user is invited to the party
if (mails.includes(userMail)) {
  //print the positive message
  alert("Ti aspettiamo alla festa!");
} else {
  //print the negative message
  alert("Non sei invitato alla festa!");
}