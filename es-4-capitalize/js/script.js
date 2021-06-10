var letteraMaiuscola = prompt('inserisci una parola');

// funzione lettera maiuscola
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
console.log(capitalizeFirstLetter(letteraMaiuscola)); 

var capitalizeWord = capitalizeFirstLetter(letteraMaiuscola);
console.log(capitalizeWord);

