const numbers = [1, 4, 3, 1, 1];

const mutatedNumbers = numbers.map((e, i) => {
  return e * i;
});

console.log(numbers);
console.log(mutatedNumbers);