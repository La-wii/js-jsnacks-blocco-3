// Dare la possibilità di inserire due parole. 

var parolaUno = prompt('Inserisci prima parola');
var parolaDue = prompt('Inserisci seconda parola');

// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


function lunghezzaStringhe(x,y){

    if(x.length > y.length) {
        return x + ' è più lunga';
    } else if (x.length < y.length) {
        return y + ' è più lunga';
    } else {
        return x + ',' +  + 'sono della stessa lunghezza';
    }

}

var parolaPiuLunga = lunghezzaStringhe(parolaUno,parolaDue);
console.log(parolaPiuLunga);
