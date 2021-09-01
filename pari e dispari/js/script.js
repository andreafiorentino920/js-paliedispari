// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta = prompt("Scegliere pari o dispari");
console.log("La scelta da te effettuata è", scelta);
var numeroUtente = parseInt(prompt("Scegliere un numero tra 1 e 5"));
console.log("Il numero scelto da te è",numeroUtente);
function generaNumero(){
    numero = Math.round(Math.random() * 5-1)+1;
    // console.log("Il numero scelto dalla cpu è",numero);
    return numero;
}
var numeroCpu = generaNumero();
console.log("Il numero generato dal computer è",numeroCpu)
var somma = numeroUtente + numeroCpu;
console.log("La somma è",somma);
function pariDispari(totale){
    var risultato = "";
    if (totale%2 ==0){
    risultato = "pari";
    }else{
    risultato = "dispari";
    }
    console.log("Il risultato è", risultato);
    return risultato;
}
if (scelta == "pari" && pariDispari(somma) == "pari"){
    console.log("Hai vinto");
}else if(scelta == "dispari" && pariDispari(somma) == "dispari"){
    console.log("Hai vinto");
}else{
    console.log("Hai perso");
}
