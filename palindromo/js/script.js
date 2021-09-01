// Inserire una parola 
var parolaUtente = prompt("Inserisci la parola da verificare");
// Creare una funzione per invertire una parola
function verificaPalindroma(parola){
    var parolaDivisa = parola.split("");
    var parolaDivisa = parolaDivisa.reverse("");
    var parolaInvertita = parolaDivisa.join("");
    if(parola == parolaInvertita){
        alert("La parola è palindroma");
    }else{
        alert("La parola non è palindroma");
    }
}
// Applicare la funzione
verificaPalindroma(parolaUtente);