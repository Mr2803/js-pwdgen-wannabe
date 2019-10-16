// dichiarazione variabili
var nome,cognome,colore,saluto,outputFinPassw;

// variabile per il nome
nome = prompt("Qual è il tuo nome?");
 //console.log(nome); debug

// variabile per il cognome
cognome = prompt("Qual è il tuo cognome?");
 //console.log(cognome); debug

// variabile colore preferito
colore = prompt("Qual è il tuo colore preferito?");
 //console.log(colore); debug

//numero casuale
nRand = Math.floor(Math.random() * 100);
 //console.log(nRand); debug

// variabile per saluto prima della password
saluto = "Ciao " + nome;
 //console.log(saluto); debug

// variabile per l'output finale password
outputFinPassw = nome + cognome + colore + nRand;
 //console.log(outputFinPassw); debug

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
