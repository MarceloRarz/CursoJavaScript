function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Math.random() retorna entre 0 ou 1 aleatoriamente
    return Math.floor(valor)
}

let opcao = -1

do { // executa pelo menos 1 vez
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1 ) 

console.log('Até a Próxima')