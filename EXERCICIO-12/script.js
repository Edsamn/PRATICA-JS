// 12. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = Number(prompt(`Ano atual`));
let anoNascimento = Number(prompt(`Ano de nascimento`));
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    document.write(`Pode votar (${idade} anos)`);
} else {
    document.write(`Não pode votar (${idade} anos)`);
}