var n1 = Number(window.prompt ('digite um numero')) //convertido como Numero (apenas number faz com que o numero possa ser real ou inteiro)
var n2 = Number.parseInt(window.prompt ('digite outro numero')) //convertido para numero inteiro, caso queira real, será inteiro

//quando se usa prompt, a variavel retornará como string, para calculos é inutil
var total = n1 + n2

alert ('o resultado foi, ' + total) //pode-se usar outra forma de mostrar as variaveis com o Template string, veja a baixo
// alert(`o resultado foi, ${total}`)