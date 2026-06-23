let equipes = [
    [],
    [],
    []
]
let resultado = [0, 1, 2]
for(let l=0;l<3;l++){
    for(let c=0;c<4;c++){
        equipes[l][c] = Number(prompt("insira a pontuaçao da equipe: "+l+" trimestre: "+c))
        if(resultado[0] <equipes[0][c]){
            resultado[0] = equipes[0][c]
        }
           if(resultado[1] <equipes[1][c]){
            resultado[1] = equipes[1][c]
        }
           if(resultado[2] <equipes[2][c]){
            resultado[2] = equipes[2][c]
        }
    }
}
console.log("maior resultado dasequipes: ")
console.log("equipe 1: "+ resultado[0])
console.log("equipe 2: "+ resultado[1])
console.log("equipe 3: "+ resultado[2])











//Escreva um algoritmo que leia dados de desempenho em uma matriz de 3x4 (3 equipes, 4
//trimestres). O programa deve analisar a matriz linha por linha e emitir um alerta informando qual
//foi a maior pontuação registrada dentro de cada uma das 3 equipes individualmente.
