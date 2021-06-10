// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. 

// Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var primoArray = ['a', 'b', 'c'];
var secondoArray = [1, 2, 3];
var nuovoArray = [];
var lunghezzaLista;

function fusioneArray(arr1, arr2){
    var nuovoArray = [];
    if (primoArray.length == secondoArray.length){
        var lunghezzaLista = arr1.length;

        for (var i = 0; i < lunghezzaLista; i++){
            nuovoArray.push(arr1[i]);
            nuovoArray.push(arr2[i]);
        }
    }   else {
        return 'I due array non sono lunghi uguali'
    }

    return nuovoArray;

}

// console.log(fusioneArray(primoArray, secondoArray));
var insimeArray = fusioneArray(primoArray, secondoArray);
console.log(insimeArray);