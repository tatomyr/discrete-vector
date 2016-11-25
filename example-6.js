// Example #6
// Comparasing of imperative & functional methods

console.log('');
console.info('Example #6');
console.log('');

const alpha = [1,2,3,4,5,6,7,8,9,10];
const ALPHA = new DiscreteVector(alpha, 3);

TIMER = { imperative: [], functional: [], ratio: [], avgRatio: 0 };
for (let i = 0; i < 10; i++) {
  timerStart = Date.now(); // Timer
  for (let n = 0; n < ALPHA.combinations; n++) {
    ALPHA.next();
    if (n === ALPHA.combinations - 1) {
      timerEnd = Date.now() - timerStart; // Timer
      TIMER.imperative.push(timerEnd);
    }
  }

  timerStart = Date.now(); // Timer
  for (let n = 0; n < ALPHA.combinations; n++) {
    ALPHA.nextFunctional();
    if (n === ALPHA.combinations - 1) {
      timerEnd = Date.now() - timerStart; // Timer
      TIMER.functional.push(timerEnd);
    }
  }
}
TIMER.imperative.forEach((item, i) => TIMER.ratio.push(TIMER.functional[i] / TIMER.imperative[i]));
console.table(TIMER);
console.log('avg:', TIMER.ratio.reduce((prev, item, i) => prev + item, 0) / TIMER.ratio.length);
