// Dare la possibilità di inserire due parole. 

var parolaUno = prompt('Inserisci la prima parola');
var parolaDue = prompt('Inserisci la seconda parola');


// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function wordsLength(w1, w2){
    var wLength;
    if (w1.length == w2.length){
        wLength = w1 + ',' + w2 + ': queste due parole hanno la stessa lunghezza';
    } else if (w1.length > w2.length) {
        wLength = 'La parola più lunga è: ' + w1;
    } else {
        wLength = 'La parola più lunga è: ' + w2;
    }

    return wLength;
}

var resultLength = wordsLength(parolaUno, parolaDue);
console.log(wordsLength(parolaUno, parolaDue));