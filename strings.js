// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом

upperCaseFirst = (str) => {
    if (!str) return str 
    return str[0].toUpperCase() + str.slice(1);
}
console.log (upperCaseFirst("rosegarden"))

// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

checkSpam =(str) => {
    let lowerStr = str.toLowerCase()
   return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'))
}

console.log(checkSpam("something"))