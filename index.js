// Crea un array vacío llamado `stack`
let stack = [];
// Crea un array `numbers` con los números del 1 al 5 in orden ascendente
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// multiplica por 2 cada elemento del array `numbers` utilizando un bucle `for`
function multiplyByTwo(numbers) {
  const numbersMultiplied = [];
  console.log(numbersMultiplied);
  for (let i = 0; i < numbers.length; i++) {
    numbersMultiplied[i] = numbers[i] * 2;
  }
  return numbersMultiplied;
}
// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers(numbers) {
  const evenNumbers = [];
  console.log(evenNumbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers[evenNumbers.length] = numbers[i];
    }
  }
  return evenNumbers;
}
// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards(numbers) {
  const reversedNumbers = [];
  console.log(reversedNumbers);
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers[reversedNumbers.length] = numbers[i];
  }
  return reversedNumbers;
}

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum(numbers) {
  let sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  console.log(sumNumbers);
  return sumNumbers;
}

// La función `average` tiene que devolver el promedio de los primeros 100 números
function average(numbers) {
  let sumNumbers = 0;
  let averageNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
    averageNumber = sumNumbers / numbers.length;
  }
  console.log(averageNumber);
  return averageNumber;
}

// La función `biggestPrime` tiene que devolver el número primo más grande del array `numbers`
function biggestPrime(numbers) {
  // Aquí va tu código
}

// Crea una variable person y asígnale un objeto vacío
var person = {};
// Agrega una propiedad `name` al objeto y asígnale "Jorge" como valor
var person = {
  name: 'Jorge',
};
// Agrega una propiedad `lastName` al objeto y asígnale "Gonzalez" como valor
var person = {
  name: 'Jorge',
  lastName: 'Gonzalez',
};
// Agrega una propiedad `birthYear` al objeto y asígnale 1995 como valor
var person = {
  name: 'Jorge',
  lastName: 'Gonzalez',
  birthYear: 1995
};
// Agrega una función `getFullName` al objeto que devuelva el nombre completo

// Agrega una función `getAge` al objeto que devuelva la edad (asumiendo que es el año 2023)
