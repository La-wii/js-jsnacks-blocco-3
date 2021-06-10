// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


var arrayNomi = ['Giorgio', 'Paolo', 'Francesca', 'Ilaria', 'Maria'];
var a = parseInt(prompt('Inserisci un numero da 1 a' + ' ' + arrayNomi.length));
var b = parseInt(prompt('Inserisci un numero da 1 a' + ' ' + arrayNomi.length));

// questo è un controllo dei dati inseriti nel prompt con if ed else
// if (a < b){
//     console.log(PositionFromAToB(arrayNomi, a, b));
// } else {
//     alert('Attenzione!Il primo numero deve essere minore del secondo');
// }


// questo è un altro controllo dei dati inseriti nel prompt con un ciclo while
while (a > b || b > arrayNomi.length){
    alert('Attenzione! Il primo numero deve essere minore del secondo');
    a = parseInt(prompt('Inserisci un numero da 1 a' + ' ' + arrayNomi.length));
    b = parseInt(prompt('Inserisci un numero da 1 a' + ' ' + arrayNomi.length));
}
console.log(PositionFromAToB(arrayNomi, a, b));



// questa funzione permette di trovare gli elementi in un array da una posizione ad un' altra
function PositionFromAToB(array, numMin, numMax){
    var arrayPositions = [];
    for (var i = numMin - 1; i < numMax; i++){
        arrayPositions.push(array[i]);
    }

    return arrayPositions;
}

console.log(PositionFromAToB(arrayNomi, a, b));