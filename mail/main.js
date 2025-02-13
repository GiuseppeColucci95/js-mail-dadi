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
]

//ask to the user his email
const userMail = prompt("Inserisci la tua mail: [es: giuseppecolucci@libero.it]");
console.log(userMail);

//create a variable to set if the user is invited or not
let present = false;

//check if user is invited with a for loop and eventually set the variable to true
for (let i = 0; i < mails.length; i++) {
  const thisMail = mails[i];

  if (thisMail === userMail) {
    present = true;
  }
}

//print the message
if (present === true) {
  alert("Ti aspettiamo alla festa!");
} else {
  alert("Non sei invitato alla festa!");
}