const DiscreteVector = require('./discrete-vector.js');
console.log(DiscreteVector);

const a = ['a', 'b', 'c'];
console.log(a);

const v = new DiscreteVector(a);
console.log(v);

for (let i = 0; i < v.combinations; i++) {
  console.log(v.next().join(''), v.fillWith(a).join(''), `#${v.index()}`);
}
