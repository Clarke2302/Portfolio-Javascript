// Função Arrow ---)->

function apresentar(nome){
    return `Olá meu nome é ${nome}`;
}
const apresentaArrow = nome => `Olá meu nome é ${nome}`;
const soma = (num1, num2) => num1+num2;

//arrow com + de uma linha de instrução

const somaNumpequenos = (num1,num2) => {
    if(num1>10||num2>10){
        return "somente número de 1 a 9";
    }else{
        return num1+num2;
    }
}
console.log(somaNumpequenos(3,8));

//Hoisting: arrow funcrtion se comporta como expressão

//diferente do operador maior ou igual que
//>=