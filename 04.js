let nota = []
let resultado = 0
let resultado_media = 0
let i = 0
for (i = 0 ; i <= 4; i++){
    nota [i] = Number(prompt("Digite as notas do aluno "+i))
     resultado = nota[i] + resultado
}
resultado_media = resultado/5
console.log("A média da turma é "+resultado_media)
for ( i = 0 ; i <= 4 ; i++){
    console.log("nota do aluno "+i+": "+nota[i])
}
let alunomedia = acimamedia(nota, i, resultado_media);
console.log("Um total de "+alunomedia+" alunos bateram essa média.")
function acimamedia(nota, i, resultado_media){
    let mediasim = Number(0)
    for (i = 0 ; i <= 4; i++){
      if (nota[i]>=resultado_media){
       mediasim = mediasim + 1
}
}
return mediasim
}
