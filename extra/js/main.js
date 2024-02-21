// Ottengo e salvo i dati di input in delle variabili cambiandone il tipo da stringa a numero
const number_passengers = Number(prompt("Inserire il numero di passeggeri"))

let userAge = [];

for (let i = 1; i <= number_passengers; i++) {
   let age = (Number(prompt("Inserire l'età del passeggero " + i)));
    userAge.push(age)
}
console.log(userAge);

//console.log(typeof userAge);
const distance = Number(prompt("Inserire i Kilometri da percorrere"));
//console.log(distance);
//console.log(typeof distance);

// Calcolo il prezzo del biglietto salvandolo in una variabile

const price_per_km = 0.21;
const ticketPrice = distance * price_per_km;
//console.log(typeof ticketPrice);

// Applico eventuali sconti in base all'età inserita

/* 
-SE età < 18 sconto 20%
-ALTRIMENTI SE età > 60 sconto 40%
*/

let messageOutput = "Tipologie di biglietti in base all'età : ";
let typeTicket;
let totalPrice = 0;
for (let age of userAge) {
    if (userAge < 18) {
        const young_discount = ticketPrice * 0.2;
        ticketPrice = ticketPrice - young_discount;
        totalPrice += ticketPrice; 
        typeTicket = 'Biglietto Junior ';
        messageOutput += typeTicket;
        //alert(messageOutput + ticketPrice + ' €');
        console.log(typeTicket);
    } else if (userAge >= 65) {
        const old_discount = ticketPrice * 0.4;
        ticketPrice = ticketPrice - old_discount;
        totalPrice += ticketPrice; 
        typeTicket = 'Biglietto Senior ';
        //alert(messageOutput + ticketPrice + ' €');
        console.log(typeTicket);
        messageOutput += typeTicket;
    } else{
        totalPrice += ticketPrice; 
        typeTicket = 'Biglietto standard ';
        //alert(messageOutput + ticketPrice + ' €');
        console.log(typeTicket);
        messageOutput += typeTicket;
    }
}

console.log(messageOutput);
alert('Prezzo totale biglietti: ' + totalPrice + ' €')