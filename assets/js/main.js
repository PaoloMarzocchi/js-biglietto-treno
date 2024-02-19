// Ottengo e salvo i dati di input in delle variabili cambiandone il tipo da stringa a numero

const userAge = Number(prompt("Inserire l'età del passeggero"));
//console.log(userAge);
//console.log(typeof userAge);
const distance = Number(prompt("Inserire i Kilometri da percorrere"));
//console.log(distance);
//console.log(typeof distance);

// Calcolo il prezzo del biglietto salvandolo in una variabile

const price_per_km = 0.21;
let ticketPrice = distance * price_per_km;
//console.log(ticketPrice);

// Applico eventuali sconti in base all'età inserita

/* 
-SE età < 18 sconto 20%
-ALTRIMENTI SE età > 60 sconto 40%
*/

let discuontedPrice;

if (userAge < 18) {
    discuontedPrice = ticketPrice - (ticketPrice * 0.2);
    console.log(
        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
          discuontedPrice,
        ),
      );
} else if (userAge >= 65) {
    discuontedPrice = ticketPrice - (ticketPrice * 0.6);
    console.log(
        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
          discuontedPrice,
        ),
      );
} else{
    console.log(
        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
          ticketPrice,
        ),
      );
}

