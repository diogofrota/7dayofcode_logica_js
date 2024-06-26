let nome =  prompt('Qual o seu nome?')
let anos = prompt('Quantos anos você tem?')
let linProgramacao = prompt('Qual a linguagem de programação que voce está estudando?')

alert (`Olá ${nome}, você tem ${anos} e já está aprendendo ${linProgramacao} ! `)

let gostar = prompt(`Você gosta de estudar ${linProgramacao}? Responda com 1 para SIM ou 2 para NÃO`)

if (gostar == "1") {
    alert('Muito bom! continue estudando e você terá muito sucesso.')

}if (gostar == "2") {  
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}