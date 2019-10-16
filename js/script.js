var nome = prompt("Qual è il tuo nome?")
var cognome = prompt("Qual è il tuo cognome?")
var colore = prompt("Qual è il tuo colore preferito?")
var saluto = "Ciao " + nome
var outputfin = nome + cognome + colore + 19

document.getElementById('password').innerHTML = saluto + ",questa è la tua password:" + outputfin

document.getElementById('use-me').innerHTML= "Usami per proteggere i tuoi dati bancari"
