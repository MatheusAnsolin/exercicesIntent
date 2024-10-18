var input = require('fs').readFileSync('index.txt', 'utf8')
var lines = input.split('\n')

const pegarValores = (a) => a.split('')

let valor = []
valor = pegarValores(lines.shift())
console.log(valor)

let notas = []

valor.map(element => {
    if (valor.length>5){
        notas[element]=element*100
    } else if (valor.length>4){
        notas[element]=element*10
    } else notas[element]=element
});
notas.forEach(element => {
    
    console.log(notas[element])
});
notas.m
