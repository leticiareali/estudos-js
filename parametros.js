// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(3, 2))
console.log(soma(4, 2))
console.log(soma(3, 3))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
;
}

// console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
                            //9         //6 = 54
// console.log(multiplica(soma(4, 5), soma(3, 3)))
console.log(multiplica(soma(4, 5))) //retorna 9 pois multiplicara por 1