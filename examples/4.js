// Example #4
//

console.log('');
console.info('Example #4');
console.log('');

const d = [1, 2, 3, 4, 5];
console.log(d);
console.log('------------------');
const r = new DiscreteVector(d);
for (let n = 0; n < 10; n++) {
  r.randomize();
  const D = d.reduce((prev, item, i) => prev + r[i] * item, 0);
  console.log(`#${n}`, r, r.fillWith(d), '~', r.fillWith_(d), D);
}
