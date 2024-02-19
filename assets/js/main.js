// Ottengo e salvo i dati di input in delle variabili cambiandone il tipo da stringa a numero

const userAge = Number(prompt("Inserire l'età del passeggero"));
//console.log(userAge);
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

let discountedPrice;

if (userAge < 18) {
    const young_discount = ticketPrice * 0.2;
    discountedPrice = ticketPrice - young_discount;
    console.log(`
    Prezzo del biglietto standard :  ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        ticketPrice,
    )} 
    Prezzo scontato per i minori di 18 anni : ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        discountedPrice,
    )}
        `);
} else if (userAge >= 65) {
    const old_discount = ticketPrice * 0.6;
    discountedPrice = ticketPrice - old_discount;
    console.log(`
    Prezzo del biglietto standard :  ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        ticketPrice,
    )} 
    Prezzo scontato per gli over 65 : ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        discountedPrice,
    )}
        `);
} else {
    console.log(`
    Prezzo del biglietto : ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        ticketPrice,
    )}
        `);
}
