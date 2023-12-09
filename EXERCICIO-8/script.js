// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let numero1 = Number(prompt('Digite um número'));
let numero2 = Number(prompt('Digite um número'));

if (numero1 === numero2) {
    document.write(`Números iguais. ${numero1} = ${numero2}`)
}else if (numero1 > numero2) {
    document.write(`Primeiro é maior. ${numero1} > ${numero2}`)
} else { 
    document.write(`Segundo é maior. ${numero1} < ${numero2}`)
}