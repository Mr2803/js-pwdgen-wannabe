// variabile per il nome
var nome = prompt("Qual è il tuo nome?");

// variabile per il cognome
var cognome = prompt("Qual è il tuo cognome?");

// variabile colore preferito
var colore = prompt("Qual è il tuo colore preferito?");

// variabile per saluto prima della password
var saluto = "Ciao " + nome;

// variabile per l'output finale password
var outputFinPassw = nome + cognome + colore + 19;

// output per saluto prima della password
document.getElementById('presentazione').innerHTML  = saluto + ",questa è la tua password:";

// output finale della password
document.getElementById('password').value =  outputFinPassw;

// output "come usare la password?"
document.getElementById('use-me').innerHTML= "Usala per proteggere i tuoi dati bancari";

// funzione per mostrare/nascondere password
function showpass(){
  document.getElementById("password").type = "text";
}
function hidepass(){
  document.getElementById("password").type = "password";
}



// funzioni per far comparire/scomparire devil
// function devil(){
//   document.getElementById("img-devil").style.visibility = "visible";
// }
//
// function devil_hidden(){
//   document.getElementById("img-devil").style.visibility = "hidden";
// }
