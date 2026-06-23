let matriz = [[],[],[]]
for (let l = 0 ; l<=2; l++){
    for (let c = 0; c<=2; c++){
      matriz [l][c] = prompt("Digite o valor da matriz "+l+","+c+".")
    }
}
for ( l = 0 ; l<=2; l++){
        console.log(" | "+matriz[l][0]+" | "+matriz[l][1]+" | "+matriz[l][2]+" | ")
}
