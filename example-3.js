// Example #3
// We have a set of letters 'l'
// Find every possible unique combination of letters (regardless of their order)

console.log();
console.log('Example #3');
console.log();

const q = ['a', 'b', 'c'];
console.log(q);
console.log('------------------');
const v = new Vector(q);
for (let n = 0; n < Math.pow(2, q.length); n++) {
  const Q = q.reduce((prev, item, i) => `${prev}${v[i] && item || ''}`, '');
  console.log(`#${n}`, v, Q);
  v.next();
}
