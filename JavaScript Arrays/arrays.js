"use strict"

// Array do professor
const numbers = [4, 3, 81, 13, 20, 17]
// Índice para os laços
let index = 0
// ------------------------------------------------------


// Exercício 1 ------------------------------------------
const numbersPlus100 = []
for (index = 0; index < numbers.length; index++) {
    numbersPlus100[index] = numbers[index] + 100
}
// console.log(numbersPlus100)
// ------------------------------------------------------


// Exercício 2 ------------------------------------------
const numbersEven = []
for (index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        numbersEven[index] = numbers[index]
    } else {numbersEven[index] = 'Ímpar'}
}
// console.log(numbersEven)
// ------------------------------------------------------


// Exercício 3 ------------------------------------------
const numbersPlus = []
let somar = 0
for (index = 0; index < numbers.length; index++) {
    somar = somar + numbers[index]
}
numbersPlus[0] = somar
// console.log(numbersPlus)


const adiciona100 = x => x + 100
const Epar = x => x % 2 == 0
const soma = (x,y) => x + y
const eImpar = x => x % 2 == 1
const eMenor20 = x => x < 20 

const numeros100 = numbers.map(adiciona100)
const numerosPares = numbers.filter(Epar)
const numerosTotal = numbers.reduce(soma, 0)

console.log(numeros100+'\n'+numerosPares+'\n'+numerosTotal)

const resultado = numbers.filter(eImpar).filter(eMenor20).reduce(soma, 0)

// Métodos do JavaScript
// .pop()
// .shift()
// .unshift()
// .push()
// .splice()

// ------------------------------------------------------

/* O que é Programação Imperativa?
    Programação onde você comanda o que o computador faz linha por linha. 
*/
/* O que é um 'Callback'?
    É um parâmetro que recebe uma função.
*/
/* ESTUDAR PROGRAMAÇÃO FUNCIONAL! 
    map, filter, reduce
    "FUNÇÕES LAMBDAS"

    cost numeros100 = numeros.map(adiciona100)
        o método .map(callback) envia para o callback:
            1º parâmetro -> O elemento
            2º parâmetro -> O índice
            3º parâmetro -> O array
            
            map(1º)
            map(1º, 2º)
            map(1º, 2º, 3º) 

            Para o callback receber o indice ou o array, é necessário colocar o primeiro parâmetro também
            que no caso seria o elemento, ou seja, para trabalhar com o índice usando a função map() precisa usar 
            tanto o primeiro parâmetro, quanto o segundo na hora de criar a função.

    const numerosPares = numbers.filter(Epar)


    const total = numbers.reduce(callback, acumulador)
            1º parâmetro -> Acumulador
            2º parâmetro -> O elemento
            3º parâmetro -> O índice
            4º parâmetro -> O array


*/

// ------------------------------------------------------

const reduce20percent = x => x - (x * 0.2) 
const multiplos3 = x => x % 3 == 0

// 1 - Descontar 20% de cada elemento
const resultado1 = numbers.map(reduce20percent)

// 2 - Somente com multiplos de 3
const resultado2 = numbers.filter(multiplos3)