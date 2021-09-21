"use strict" // Deixa o interpretador do navegador mais restrito.

// alert('Hello World!')

// 1 - Classical Function Syntax.
function soma(a, b) {
    return a + b
}
soma(3, 9)
// ------------------------------------------------------------------

// 2 - Anonymous Function Syntax. (expression)
const soma = function(a, b) {
    return a + b
}
/*  
In this case, the function is storaged
in a variable, and it's used in the same
way as the classical function. 
soma(value1, value2)
*/

// ------------------------------------------------------------------

// 3 - Arrow Function Syntax.
// Complete Version.
const soma = (a, b) => {
    return a + b
}

// Reduced Version.
const soma = (a, b) => a + b

// 1 Parameter Version.
const add10 = a => a + 10
const cubo = number => number ** 3

// ------------------------------------------------------------------


