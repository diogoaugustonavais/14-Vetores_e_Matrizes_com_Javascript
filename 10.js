let matrizA = [[],[],[]]
let matrizB = [[],[],[]]
let matrizC = [[],[],[]]
for (let l = 0 ; l <=1; l++){
    for (let c = 0 ; c <=2; c++){
        matrizA [l][c]  = Number(prompt("Digite o valor da matriz A "+l+","+c))
    }
}
for (l = 0 ; l <=1; l++){
    for ( c = 0 ; c <=2; c++){
        matrizB [l][c]  = Number(prompt("Digite o valor da matriz B "+l+","+c))
    }
}
for (l = 0 ; l <=1; l++){
    for ( c = 0 ; c <=2; c++){
         matrizC [l][c] = matrizA[l][c]+matrizB[l][c];
    }
}
console.log("Exibindo resultados da matriz C")
for (l = 0 ; l <=1; l++){
   console.log(" | "+matrizC[l][0]+" | "+matrizC[l][1]+" | "+matrizC[l][2]+" | ")
}
