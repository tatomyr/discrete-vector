class Vector extends Array {
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

  reset() {
    for (let i in this) this[i] = 0;

    return this;
  }
}
