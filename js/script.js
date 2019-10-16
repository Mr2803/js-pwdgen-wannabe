var nome = prompt("Qual è il tuo nome?")
var cognome = prompt("Qual è il tuo cognome?")
var colore = prompt("Qual è il tuo colore preferito?")
var saluto = "Ciao " + nome
var outputfin = nome + cognome + colore + 19

document.getElementById('presentazione').innerHTML  = saluto + ",questa è la tua password:" 

document.getElementById('password').innerHTML =  outputfin

document.getElementById('use-me').innerHTML= "Usala per proteggere i tuoi dati bancari"
