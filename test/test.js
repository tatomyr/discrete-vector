const expect = require('chai').expect;
const DiscreteVector = require('../index.js');

const origin = ['a', 'b', 'c'];
const vector = new DiscreteVector(origin);

describe('#DiscreteVector', () => {
  it('should create zero-filled array coerced to string', () => {
    const result = vector.join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('000');
  });
  it('should find next combination with imperative method coerced to string', () => {
    const result = vector.next().join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('100');
  });
  it('should find next combination with functional method coerced to string', () => {
    const result = vector.next_().join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('010');
  });
  it('should fill next combination with origin (imperative method) coerced to string', () => {
    const result = vector.next().fillWith(origin).join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('ab');
  });
  it('should fill next combination with origin (functional method) coerced to string', () => {
    const result = vector.next_().fillWith_(origin).join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('c');
  });
  it('should fill (functionally) next combination (imperative) with origin coerced to string', () => {
    const result = vector.next().fillWith_(origin).join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('ac');
  });
  it('should fill (imperatively) next combination (functional) with origin coerced to string', () => {
    const result = vector.next_().fillWith(origin).join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('bc');
  });
  it('should find next (the last) combination with imperative method & coerce it to string', () => {
    const result = vector.next().join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('111');
  });
  it('should return last combination (imperative method) coerced to string', () => {
    for (let i = 0; i < vector.combinations; i++) {
      vector.next();
    }
    const result = vector.join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('111');
  });
  it('should return last combination (functional method) coerced to string', () => {
    for (let i = 0; i < vector.combinations; i++) {
      vector.next();
    }
    const result = vector.join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('111');
  });
  it('should reset vector & coerce it to string', () => {
    const result = vector.reset().join('');
    console.log(`#${vector.index()}`, vector.join(''), vector.fillWith(origin).join(''), '~', vector.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal('000');
  });

  it('should compare random vector filled with origin imperatively and functionally', () => {
    const random = (new DiscreteVector(origin, 4)).random();
    const result = random.fillWith(origin).join() === random.fillWith_(origin).join();
    console.log(`#${random.index()}`, random.join(''), random.fillWith(origin).join(''), '~', random.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal(true);
  });
  it('should compare random vector next operations done imperatively and functionally', () => {
    const random = (new DiscreteVector(origin, 4)).random();
    const result = random.next().index() - random.next_().index();
    console.log(`#${random.index()}`, random.join(''), random.fillWith(origin).join(''), '~', random.fillWith_(origin).join(''), `=[${result}]!`);
    expect(result).to.equal(-1);
  });
  it('should return number of possible combinations', () => {
    const result = (new DiscreteVector(7, 3)).combinations;
    expect(result).to.equal(16384);
  });
});
