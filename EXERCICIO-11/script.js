// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numero = Number(prompt('Digite um número.'))

if (numero % 2 === 0) {
    alert(`Número é par: ${numero}`);
} else {
    alert(`Número é ímpar: ${numero}`);
}