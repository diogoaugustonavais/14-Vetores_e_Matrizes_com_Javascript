let num = [];


for(let i = 0; i < 10; i++){
    
    num[i] = prompt("Insira o valor do " + (i) + "º código: "); 
}

let codigo = prompt("Qual código você deseja rastrear?");

let encontrou = false; 
let posicaoEncontrada = -1;

// 2. Busca Sequencial
for(let i = 0; i < 10; i++){
    if(codigo === num[i]){
        encontrou = true; 
        posicaoEncontrada = i;
        break; 
    }
}


if(encontrou == true){
    alert("O código está na posição (índice): " + posicaoEncontrada);
} else {
    alert("Código não cadastrado");
}
