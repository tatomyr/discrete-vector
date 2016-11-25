/**
 * Defining of Discrete Vector class
 * Min value -- 0
 * Max value is set by 'range' parameter
 * Default range -- 1 (binary vector)
 */

class DiscreteVector extends Array {
  constructor(origin) {
    super();

    if (Array.isArray(origin)) {
      origin.forEach((item, i) => this[i] = 0);
    } else if (typeof origin === 'number') {
      for (let i = 0; i < origin; i++) this[i] = 0;
    } else {
      throw(new Error('Argument is neither array nor number!'));
    }
  }

  next(range = 1) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] < range) {
        this[i]++;
        break;
      } else {
        this[i] = 0;
      }
      // if (this[i] >= range) {
      //   this[i] = 0;
      // } else {
      //   this[i]++;
      //   break;
      // }
    }
    return this;
  }

  random(range = 1) {
    this.forEach((item, i) => this[i] = Math.floor(Math.random() * (range + 1)));
    return this;
  }

  reset() {
    this.forEach((item, i) => this[i] = 0);
    return this;
  }

  index(range = 1) {
    return this.reduce((prev, item, i) => prev + item * Math.pow(range + 1, i), 0);
  }

  combinations(range = 1) {
    return Math.pow(range + 1, this.length);
  }

  fill(origin) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this[i]; j++) result.push(origin[i]);
    }
    return result;
  }
}
