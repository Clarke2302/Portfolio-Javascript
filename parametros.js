//parâmetros de função

function soma(num1,num2){

    return num1+num2;
}

//console.log(soma(3,5));

//parametros X argumentos

//ordem dos parametros

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}` ;
}

//console.log(nomeIdade(40,"Juliana"));

function multiplica (num1 = 1, num2= 1){
    return num1 * num2;
}
                 //9          //6
console.log(multiplica (soma(4,5)));
