/**
 * Defining of Discrete Vector class
 * Min value -- 0
 * Max value is set by 'range' parameter
 * Default range -- 1 (binary vector)
 */

class DiscreteVector extends Array {
  constructor(original) {
    super();

    for (let i in original) this[i] = 0;
  }

  next(range = 1) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] >= range) {
        this[i] = 0;
      } else {
        this[i]++;
        break;
      }
    }

    return this;
  }

  random(range = 1) {
    for (let i in this) this[i] = Math.floor(Math.random() * (range + 1));

    return this;
  }

  reset() {
    for (let i in this) this[i] = 0;

    return this;
  }
}
