const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome} !`

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //up recebe a função - Texto é o parametro

console.log(`Ei... ${up('Cuidado')}!`)