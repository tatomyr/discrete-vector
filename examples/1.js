// Example #1
// We have a set of operation duration intervals.
// Find every possible combination of total duration
// Assume that there are only two possible duration for each operation - min or max

console.log('');
console.info('Example #1');
console.log('');

const embodiment = (a, b) => a.reduce((prev, item, i) => prev + item[b[i]], 0);
const t = [

  [16, 20],
  [35, 90],
//*/
  [115, 175],
  [20, 30],
  [75, 125],
  [40, 50],
  [20, 30],
  [20,45],
/*/
  [120,200],
  [20, 30],
  [100,150],
  [40, 50],
  [20, 30],
  [20,45],
//*/
];

// const t = [
//   [6, 22],
//   [6, 10],
//   [8,14],
//   [20,25],
//   [10,20],
//   [6,10]
// ];


// const t = [
//   [15,25],
//   [16,40],
//   [24,35],
//   [16,24],
//   [12,18],
//   [1,2],
//   [3,5],
//   [20,30],
//   [15,40]
// ];

// const t = [
//   [8,	16],
//   [8,	16],
//   [8,	12],
//   [26,	36],
//   [14,	20],
//   [26,	36],
//   [14,	20],
//   [26,	36],
//   [14,	20],
//   [26,	36]
// ]

// const t = [
//   [10,	28],
//   [20,35],
//   [5,8],
//   [6,12],
//   [1,2],
//   [6,15],
//   [8,22],
//   [2,3],
//   [1,3],
//   [10,24],
//   [6,14],
//   [14,25],
//   [6,10],
// ]

const J = new DiscreteVector(t);
const T = [];
for (let n = 0; n < J.combinations; n++) {
  T.push(embodiment(t, J.next()));
}
console.log(T.sort((a, b) => a - b));
const P = 0.95;
console.log(
  `${P * 100}%: [${Math.ceil((T.length - 1) * P)}] =>`,
  T.sort((a, b) => a - b)[Math.ceil((T.length - 1) * P)]
);
