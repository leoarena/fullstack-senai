function emitirAlerta() {
    alert('[ATENÇÃO] Alerta Importante')
}

function irPagina2() {
    confirm('Tem certeza que deseja ir para a página 2?')
}

function perguntarNome() {
    let nomeInserido = prompt('Qual o seu nome?')
    alert(`Seu nome é: ${nomeInserido}`)
}

function questionario() {
    let nomeInserido = prompt('Qual o seu nome?')
    let idadeInserida = Number(prompt('Qual a sua idade?'))
    let cidadeInserida = prompt('Qual a sua cidade?')
    console.log({
        nomeInserido,
        idadeInserida,
        cidadeInserida
    })
}

function perguntarNomeCompleto() {
    let sobrenome = prompt('Qual o seu sobrenome?')
    let nome = prompt('Qual o seu nome?')
    alert(`Seu nome completo é: ${nome} ${sobrenome}`)
}