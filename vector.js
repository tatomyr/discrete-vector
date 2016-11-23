class Vector extends Array {
  constructor(original) {
    super();
    for (let i in original) this[i] = 0;
  }

  next(range = 1) {
    for (let k = 0; k < this.length; k++) {
      if (this[k] >= range) {
        this[k] = 0;
      } else {
        this[k]++;
        break;
      }
    }

    return this;
  }

  reset() {
    for (let i in this) this[i] = 0;

    return this;
  }
}

// Example #1
// We have a set of operation duration intervals.
// Find every possible combination of total duration
// Assume that there are only two possible duration for each operation - min or max
console.log();
console.log('Example #1');
console.log();

const embodiment = (a, b) => a.reduce((prev, item, i) => prev + item[b[i]], 0);

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
const J = new Vector(t);
const T = [];
for (let n = 0; n < Math.pow(2, t.length); n++) {
  T.push(embodiment(t, J.next()));
}
console.log(T.sort((a, b) => a - b));

// Example #2
// We have TWO sets of weights 'h'
// Which combinations are possible?
console.log();
console.log('Example #2');
console.log();

const h = [7, 1, 4];
console.log(h);
console.log('------------------');
const f = new Vector(h);
for (let n = 0; n < Math.pow(3, h.length); n++) {
  const H = h.reduce((prev, item, i)=> prev + item * f[i], 0);
  console.log(`#${n}`, f, H);
  f.next(2);
}
