// Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

let votosBrancos = Number(prompt('Votos brancos:'));
let votosNulos = Number(prompt('Votos nulos:'));
let votosValidos = Number(prompt('Votos válidos:'));
let totalEleitores = votosBrancos + votosNulos + votosValidos;
let percentualVotosBrancos = (votosBrancos * 100) / totalEleitores;
let percentualVotosNulos = (votosNulos * 100) / totalEleitores;
let percentualVotosValidos = (votosValidos * 100) / totalEleitores;

document.write(`Total de eleitores:${totalEleitores} <br>`);
document.write(`Percentual de votos brancos: ${percentualVotosBrancos.toFixed(2)}% <br>`);
document.write(`Percentual de votos nulos: ${percentualVotosNulos.toFixed(2)}% <br>`);
document.write(`Percentual de votos válidos: ${percentualVotosValidos.toFixed(2)}% <br>`)