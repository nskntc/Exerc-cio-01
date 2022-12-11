let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")

let sum = Number(n1) + Number(n2);
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let rest = n1 % n2

alert(
    `Primeiro número é ${n1} e o segundo número é ${n2}
    A soma é: ${sum}
    A subtração é: ${sub}
    A multipĺicação é: ${mult}
    A divisão é: ${div.toFixed(2)}
    O resto da divisão é: ${rest}
    A soma é ${sum%2==0 ? 'par' : 'ímpar'}
    Os números são ${n1===n2 ? 'iguais' : 'diferentes'}`
)