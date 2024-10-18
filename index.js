var input = require('fs').readFileSync('index.txt', 'utf8')
var lines = input.split('\n')

const pegarValores = (a) => a.split('.')

let valor = pegarValores(lines.shift())
console.log(valor)
let valorNota = valor[0]
let valorMoeda = valor[1]
console.log(valorNota)
console.log(valorMoeda)

const notas = new Array(5)
// let notas = [de100, de50, de20, de10, de5, de2]
const moedas = new Array(5)
//let moedas = [de01, de050, de025, de010, de005, de001]

notas.forEach(element => {
    if((valorNota/100) > 1){
        notas.at(element) +=1
    }else if(valorNota/10>1){
        notas.at(element) +=1
    }else 
    notas.at(element) +=1
    }
);
notas.forEach(element => {
    console.log(notas.at(element))
    
});
console.log(notas)
moedas.forEach(element => {
    if((valorMoeda/100) > 1){
        moedas.at(element) = moedas.at(element)+1
    }else if(valorNota/10>1){
        moedas.at(element) = moedas.at(element)+1
    }else 
    moedas.at(element) = moedas.at(element)+1
    }
);
moedas.forEach(element => {
    console.log(moedas.at(element))
    
});
console.log(moedas)


/*moedas.forEach(element => {
    
});
*/




/*
let x
valores = valor.map((e, i)=>{
    e=Number(e)
    if (valor.length>5){
        e*100
    } else if (valor.length>4){
        e*10
    }
    valores[i] = e
}
)
/*







/*
console.log(`NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01`)
*/