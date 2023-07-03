//comparação implícita
/*

const numero = 5;
const texto = "5";

console.log(numero===texto);

//typeof

console.log(typeof numero);
console.log(typeof texto);

//conversão explícita

console.log(Number(texto));
*/
//operador ternário - tipo if & else

//só vai liberar se o usuário ser maior de 18 anos

const idadeMinima=18;
const idadeCliente = 19;
/*
if(idadeCliente>=idadeMinima){
    console.log("Cerveja");
}else{
    console.log("Refrigerante");
}
*/

             //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "Cerveja":"Refrigerante");
//esse é um operador ternário (>=  ?  :)