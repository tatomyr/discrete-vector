// Example #3
// We have a set of letters 'l'
// Find every possible unique combination of letters (regardless of their order)

console.log('');
console.info('Example #3');
console.log('');

const q = ['a', 'b', 'c'];
console.log(q);
console.log('------------------');
const v = new DiscreteVector(q);
for (let n = 0; n < v.combinations; n++) {
  console.log(`#${n}`, v, v.fillWith(q), '~', v.fillWith_(q));
  v.next();
}
