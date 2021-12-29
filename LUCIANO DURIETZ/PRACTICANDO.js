function esPrimo(n) {
  if (n<2) {
    return "no es primo"
  }
  for (let i = 2; i < n; i++) {
    if (n%i===0) {
      return "no es primo"      
    }
  }
  return "es primo"
}
console.log(esPrimo(996))