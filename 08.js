let matriz = [[],[],[],[]]
matriz [0][0] = 1
for (let l = 0 ; l <=3; l++){
    for (let c = 0 ; c <=3 ; c++){
     matriz [l][c] = 0
     if(l == c){
      matriz[l][c] = 1
     }
    }
}
for (let l = 0 ; l <=3; l++){
        console.log(" | "+matriz[l][0]+" | "+matriz[l][1]+" | "+matriz[l][2]+" | "+matriz[l][3]+" | ")
}
