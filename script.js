function calculo(){

var tn1 = window.document.getElementById('meses')
var tn2 = window.document.getElementById('salarios')
var res = window.document.getElementById('resultados')
var n1 = Number(tn1.value)
var n2 = Number(tn2.value)


var s = n2 / 12 * n1;

res.innerHTML = `O seu décimo terceiro de parcela única é de R$${s} `;



}