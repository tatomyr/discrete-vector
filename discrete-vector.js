/**
 * Defining of Discrete Vector class
 * Min value -- 0
 * Max value is set by 'range' parameter
 * Default range -- 1 (binary vector)
 */

class DiscreteVector extends Array {
  constructor(origin, range = 1) {
    super();

    if (Array.isArray(origin)) {
      origin.forEach((item, i) => this[i] = 0);
    } else if (typeof origin === 'number') {
      for (let i = 0; i < origin; i++) this[i] = 0;
    } else {
      throw(new Error('Argument is neither array nor number!'));
    }

    this.range = range;
    this.combinations = Math.pow(range + 1, this.length);
  }

  next() {
    for (let i = 0; i < this.length; i++) {
      if (this[i] < this.range) {
        this[i]++;
        break;
      } else {
        this[i] = 0;
      }
      // if (this[i] >= this.range) {
      //   this[i] = 0;
      // } else {
      //   this[i]++;
      //   break;
      // }
    }
    return this;
  }

  nextFunctional() {
    this.some((item, i) => item < this.range ? ++this[i] : this[i] = 0);
    return this;
  }

  random() {
    this.forEach((item, i) => this[i] = Math.floor(Math.random() * (this.range + 1)));
    return this;
  }

  reset() {
    this.forEach((item, i) => this[i] = 0);
    return this;
  }

  index() {
    return this.reduce((prev, item, i) => prev + item * Math.pow(this.range + 1, i), 0);
  }

  fill(origin) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this[i]; j++) result.push(origin[i]);
    }
    return result;
  }

  fillFunctional(origin) {
    const result = [];
    this.forEach((item, i) => {
      for (let j = 0; j < item; j++) result.push(origin[i]);
    });
    return result;
  }
}
