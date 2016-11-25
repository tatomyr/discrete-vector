// Example #2
// We have TWO sets of weights 'h'
// Which combinations are possible?

console.log('');
console.info('Example #2');
console.log('');

const h = [7, 1, 4];
console.log(h);
console.log('------------------');
const f = new DiscreteVector(h, 2);
for (let n = 0; n < f.combinations; n++) {
  const H = h.reduce((prev, item, i)=> prev + item * f[i], 0);
  console.log(`#${n}`, f, f.fill(h), H);
  f.next();
}
