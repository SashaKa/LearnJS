//  Напиcfnm функцию, которая возвращает n-е число Фибоначчи.
// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// рекурсия

fibonacci = ( n ) => {
  if ( n < 2)
  return n
  else
  return fibonacci(n-1)+fibonacci(n-2) 
}
console.log (fibonacci (7) )


// //цикл
fibonacci = (n) => {
 const a = 0, b = 1 
for (i = 3; i <= n; i++ ) {
  const c = a + b
  a = b
  b = c
} 
  return b 
}
  console.log ( fibonacci (7))
  



// МАссив --------------TODO
fibonacci = (n) => {
  let arrFib = [0,1];
  for (let i = 1; i < n; i++) {
  arrFib.push(arrFib [i] + arrFib [i-1]);
  }
return(arrFib [i-1] );
}
  console.log ( fibonacci (7))