/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
*/

//generate random number for pc and print it
const pcNumber = Number(Math.floor(Math.random() * 6 + 1));
console.log("Numero pc: " + pcNumber);

//generate random number for user and print it
const userNumber = Number(Math.floor(Math.random() * 6 + 1));
console.log("Numero utente: " + userNumber);

//check what is the greatest number
if (userNumber > pcNumber) {
  //print the result when the user wins
  console.log(`L'utente ha vinto! Numero utente: ${userNumber}, numero pc: ${pcNumber}`);
} else if (pcNumber > userNumber) {
  //print the result when the pc wins
  console.log(`Il computer ha vinto! Numero utente: ${userNumber}, numero pc: ${pcNumber}`);
} else {
  //print the result when no one wins
  console.log(`Pareggio! Numero utente: ${userNumber}, numero pc: ${pcNumber}`);
}

