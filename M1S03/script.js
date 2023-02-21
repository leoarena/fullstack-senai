// Função Par ou Ímpar
let formulario1 = document.querySelector('#formParOuImpar')
formulario1.addEventListener("submit", function(e) {
  e.preventDefault()
  let number = document.querySelector('#inputParOuImpar').value
  if (number % 2 === 0) {
    console.log(`${number} é par`)
  } else {
    console.log(`${number} é impar`)
  }
  formulario1.reset()
})

// Função Idade
let formulario2 = document.querySelector('#formIdade')
formulario2.addEventListener("submit", function(e) {
  e.preventDefault()
  let idade = document.querySelector('#inputIdade').value
  if (idade < 0 || idade > 110) {
    alert(`Idade Inválida`)
  } else if (idade >= 0 && idade <= 12) {
    alert(`Criança: 0 a 12 anos`)
  } else if (idade >= 13 && idade <= 17) {
      alert(`Adolescente: 13 a 17 anos`)
  } else if (idade >= 18 && idade <= 65) {
      alert(`Adulto: 18 a 65 anos`)
  } else {
    alert(`Sênior: 66 ou mais`)
  }
  formulario2.reset()
})

// Função Carro
let formulario3 = document.querySelector('#formCarro')
formulario3.addEventListener("submit", function(e) {
  e.preventDefault()
  let pesoCarro = document.querySelector('#inputPeso').value
  let comprimentoCarro = document.querySelector('#inputComprimento').value
  if (pesoCarro > 1500 && comprimentoCarro > 5) {
    alert(`Seu carro não pode passar na ponte.`)
  } if (pesoCarro < 0 || comprimentoCarro < 5) {
    alert(`Valor inválido.`)
  } else {
    alert(`Seu carro pode passar na ponte.`)
  }
  formulario3.reset()
})

// Função Valor do Pedido
let formulario4 = document.querySelector('#formPedido')
formulario4.addEventListener("submit", function(e) {
    e.preventDefault()
    let valorPedido = document.querySelector('#inputPedido').value
    if (valorPedido <= 10000) alert(`Classificação Bronze`)
    if (valorPedido > 10000 && valorPedido <= 50000) alert(`Classificação Prata`)
    if (valorPedido >= 100000 && valorPedido <= 500000) alert(`Classificação Ouro`)
    if (valorPedido > 500000) alert(`Classificação Platinum`)
    formulario4.reset()
})

// Função Senha
let formulario5 = document.querySelector('#formSenha')
formulario5.addEventListener("submit", function(e) {
    e.preventDefault()
    let senhaInserida = document.querySelector('#inputSenha').value
    const senhaCorreta = `1234`
    if (senhaInserida === senhaCorreta) alert(`ACESSO PERMITIDO`)
    else alert(`ACESSO NEGADO`)
    formulario5.reset()
})

// Função 2 valores
let formulario6 = document.querySelector('#formDoisValores')
formulario6.addEventListener("submit", function(e) {
    e.preventDefault()
    let valor1 = document.querySelector('#inputValor1').value
    let valor2 = document.querySelector('#inputValor2').value

    if (valor1 !== valor2) {

      if (valor1 >= 0 || valor2 >= 0) {
        let valorMaior = valor1
        if (valor2 > valorMaior) alert(`Valor Maior: ${valor2}`)
        else alert(`Valor Maior: ${valor1}`)

      } else if (valor1 < 0 && valor2 < 0) {
          let primeiroValor = Math.abs(valor1)
          let segundoValor = Math.abs(valor2)
          if ( primeiroValor > segundoValor) alert(`Valor Maior: ${valor2}`)
          else alert(`Valor Maior: ${valor1}`)
      }

    } else alert(`Os valores não podem ser iguais.`)
    formulario6.reset()
})