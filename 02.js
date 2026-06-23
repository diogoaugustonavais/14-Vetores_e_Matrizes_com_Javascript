let temperatura = []
let maiortemperatura = 0
let diamaior = 0
for (let i = 0 ; i <= 10; i ++){
    temperatura [i] = prompt("Digite a temperatura do dia "+i+".")
     if(temperatura[i]>maiortemperatura){
        maiortemperatura = temperatura[i]
        diamaior = i
     }
}
console.log("Exibindo a maior temperatura registrada:")
console.log("A maior temperatura foi "+maiortemperatura+"°, ela foi registrada no dia "+diamaior)
