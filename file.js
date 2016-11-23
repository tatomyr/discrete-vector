Array.prototype.setZero = function() {
  return this.map(() => 0);
}

Array.prototype.next = function(range = 1) {

  for (let k = 0; k < this.length; ) {
    if (this[k] >= range) {
      this[k] = 0;
      k++;
    } else {
      this[k]++;
      break;
    }
  }

  return this;
}

const embodiment = (a, b) => a.reduce((prev, next, i) => prev + next[b[i]], 0);

// *****************************************************************************

const t = [
  [115, 175],
  [20, 30],
  [20, 30],
  [40, 100],
  [100, 150],
  [30, 40],
  [40, 50],
  [20, 30],
  [20, 30],
  [35, 50],
  [20, 40],
  [16, 20],
  [40, 100],
  [20, 30]
];

let J = t.setZero();

console.log(J, embodiment(t, J));

console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
console.log(J.next(), embodiment(t, J));
