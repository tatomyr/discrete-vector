// Example #5
// Abstract vector 'C' combinations
// (Example of use nemeric argument in constructor & the 'index' method)

console.log('');
console.info('Example #5');
console.log('');

const C = new DiscreteVector(4);
for (let n = 0; n < C.combinations; n++) {
  console.log(`#${n}`, C, C.index());
  C.next();
}

console.log('Now random:');
for (let n = 0; n < 10; n++) {
  console.log(`#${n}`, C.random(), C.index());
}
