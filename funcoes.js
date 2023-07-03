//funções e sua utilização no javascript

/*let x = "";
console.log(x);
x = "oi";
*/



//1)declara a função
           //string
function imprimir(texto){
    console.log(texto);
}
//2) executa a função (1 ou+ vezes)

//imprimir("oi");

//3 formas de escrever funções

function soma(){
    const resultado = (2+2);
    return resultado; //return tem que estar no final da função
}
//console.log(soma());

imprimir(soma());