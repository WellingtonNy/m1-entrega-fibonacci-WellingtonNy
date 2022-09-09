function add(num1, num2) {
    return num1 + num2
}


function fibonacci(numero) {
    if (numero < 1) {
        return 0
    }
    if (numero <= 2) {
        return 1
    }

    let numero2 = 0
    let numero1 = 1
    let result = numero

    for (let i = 2; i <= numero; i = add(i, 1)) {
        result = add(numero1, numero2)
        numero2 = numero1
        numero1 = result
    }
    return result
}
