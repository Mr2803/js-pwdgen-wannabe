var nome = prompt("Qual è il tuo nome?")
var cognome = prompt("Qual è il tuo cognome?")
var colore = prompt("Qual è il tuo colore preferito?")
var saluto = "Ciao " + nome
// var numero = Math.round(Math.random()*100);)
var outputfin = nome + cognome + colore + 19

document.getElementById('password').innerHTML = saluto + ",questa è la tua password:" + outputfin

document.getElementById('use-me').innerHTML= "Usala per proteggere i tuoi dati bancari"
