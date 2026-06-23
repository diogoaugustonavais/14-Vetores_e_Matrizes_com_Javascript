num = [
    [],
    [],
    []
]
let resultado = 0
for(let l=0;l<3;l++){
    for(let c=0;c<3;c++){
      num[l][c] = Number(prompt("insira o valor de ["+ l +"] ["+ c +"]"))
      if(l === c){
      resultado = num[l][c] + resultado
      }
    }
}
alert("resultado: " + resultado)

