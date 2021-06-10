var primoArray = ['a', 'b', 'c'];
var secondoArray = [1, 2, 3];
var nuovoArray = [];
var lunghezzaLista;

function fusioneArray(arr1, arr2){
    var nuovoArray = [];
    if (arr1.length == arr2.length){
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

// fusioneArray(primoArray, secondoArray);
// console.log(fusioneArray(primoArray, secondoArray));
// console.log(nuovoArray);
var mix = fusioneArray(primoArray, secondoArray);
console.log(mix);
