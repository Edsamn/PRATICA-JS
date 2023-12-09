// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let compra = Number(prompt(`Quantas maçãs quer comprar?`))
if (compra >= 12) {
    document.write(`A sua compra ficou R$`,compra * 0.25 )
} else {
    document.write(`A sua compra ficou R$`,compra * 0.30 )
}