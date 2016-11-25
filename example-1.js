// Example #1
// We have a set of operation duration intervals.
// Find every possible combination of total duration
// Assume that there are only two possible duration for each operation - min or max

console.log('');
console.info('Example #1');
console.log('');

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
const J = new DiscreteVector(t);
const T = [];
timerStart = Date.now(); // Timer
for (let n = 0; n < J.combinations(); n++) {
  T.push(embodiment(t, J.next()));
  if (n === J.combinations() - 1) console.log(Date.now() - timerStart); // Timer
}
console.log(T.sort((a, b) => a - b));
const P = 0.95;
console.log(
  `${P * 100}%: [${Math.ceil((T.length - 1) * P)}] =>`,
  T.sort((a, b) => a - b)[Math.ceil((T.length - 1) * P)]
);
