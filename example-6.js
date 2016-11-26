// Example #6
// Comparasing of imperative & functional methods

console.log('');
console.info('Example #6');
console.log('');

const vector = new DiscreteVector(20, 1);

TIMER = { imperative: [], functional: [], ratio: [] };
for (let i = 0; i < 10; i++) {
  timerStart = Date.now(); // Timer
  for (let n = 0; n < vector.combinations; n++) {
    vector.next();
    if (n === vector.combinations - 1) {
      timerEnd = Date.now() - timerStart; // Timer
      TIMER.imperative.push(timerEnd);
    }
  }

  timerStart = Date.now(); // Timer
  for (let n = 0; n < vector.combinations; n++) {
    vector.nextFunctional();
    if (n === vector.combinations - 1) {
      timerEnd = Date.now() - timerStart; // Timer
      TIMER.functional.push(timerEnd);
    }
  }
}
TIMER.imperative.forEach((item, i) => TIMER.ratio.push(TIMER.functional[i] / TIMER.imperative[i]));
console.table(TIMER);
console.log('avg i:', TIMER.imperative.reduce((prev, item, i) => prev + item, 0) / TIMER.imperative.length);
console.log('avg f:', TIMER.functional.reduce((prev, item, i) => prev + item, 0) / TIMER.functional.length);
console.log('avg r:', TIMER.ratio.reduce((prev, item, i) => prev + item, 0) / TIMER.ratio.length);
