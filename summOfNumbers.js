// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n.sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3


// цикл
sumTo = (n) => {
  let sum = 0
  for ( let count = 1; count < n; count++)  {
    sum = sum + count
  }
    return sum
}
  console.log(sumTo(3))


// рекурсия
sumTo = (n) => {
    if (n == 1) return 1 
    else {
    return n + sumTo (n-1)   
    }
}
    console.log(sumTo(10))


   
// // function pow(x, n) {
//   if (n != 1) { // пока n != 1 сводить вычисление pow(x,n) к pow(x,n-1)
//     return x * pow(x, n - 1);
//   } else {
//     return x;
//   }
// } 



