//boolean
const usuariolog = true;
const senhalog = false;
//truthy ou falsy não são booleanos mas se comportam como fossem

//0 pode ser = false
//1 pode ser = true

//o java considera isso como falso
//console.log(0 == false);
//console.log(""  == false);
//o java reconhece isso como verdadeiro
//console.log(1 == true);

//null e o undefined
//nulo sem valor e undefined indefinido

let minhaVar; //undefined
let varNull = null; //null

//console.log(minhaVar);
//console.log(varNull);

//typeof é um jeito de descobrir que tipo de elemento a variavel é
let numero = 3;
let texto = "Alura";
//console.log(typeof numero);
//console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);
