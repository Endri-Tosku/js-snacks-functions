/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(iniziale) {
    const result = [];

    for (let i = 0; i < iniziale.length; i++) {
        const initial = iniziale[i][0]; // mi prende solo la prima lettera del nome
        result.push(initial);
    }

    return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]




