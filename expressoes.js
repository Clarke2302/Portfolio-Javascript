//declaração de função
/*
function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param");
*/

//expressões de função

//funçao nao tem um nome
//const soma = function(num1,num2){return num1 + num2}
//console.log(soma(1,1));

//diferença principal ("lista as funções" var são listadas no topo/roysting)

console.log(apresentar()); //o console pode aparecer antes

function apresentar(){
    return "olá";
}

console.log(soma(1,1)); // o console não pode aparecer antes pois não lemos a const antes

const soma = function(num1,num2){return num1 + num2}
