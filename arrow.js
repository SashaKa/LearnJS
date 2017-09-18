const last = [ goods.length - 1]

console.log (last)


var styles = [ "jazz", "blues"]
styles.push ("rock-n-roll")
styles[styles.length-2 ] = "classic"
console.log (styles.shift ())
styles.unshift("rap", "reggey")
console.log (styles)



var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"]
var rand = Math.floor(Math.random() * arr.length)
console.log( arr[rand] )

// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

// создаем пустой массив и проверяем поддерживается ли indexOf
if ([].indexOf) { 
    
    const find = (array, value) =>  {
        return array.indexOf(value)
    }
} else { 
        const find = (array,value) => {
            for (i = 0; i < array.length; i ++) {
                if (array [ i ] === value )
                 return i
            }
            return -1
        }
    }
console.log (find[1, '5', 6], 6)



// Создайте пустой объект user.
// Добавьте свойство name со значением Вася.
// Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей.
// Удалите свойство name из объекта.

const user = {}
user.name = "Vasya"
user.surname = "Petrov"
user.name = "Sergey"
delete. user.name

console.log (user.name)   