# discrete-vector

The light-weight JavaScript library that defines a DiscreteVector class
which is useful when you try to look through some array of data.
For example, you have the array: `origin = ['a', 'b', 'c']`
and you are interested to find all possible combinations of this chars.
It can be `'a', 'b', 'ab', 'c', 'ac', 'bc'` and finally `'abc'`.
So you can attach the library and create binary vector: `vector = new DiscreteVector(origin)`.
It initializes array filled with zeros.
You have to perform `vector.next()` each time you want to find next combination.
A number of possible combinations can be found with `vector.combinations`.
To fill the vector with random values (within defined range) write down `vector.random()`.
To fill a new array with the proper amount of origin's array items write down `vector.fillWith(origin)`.
To reset vector write down `vector.reset()`.

You also can specify arity of the vector (default binary, max value is equal to 1).
To do this put the second parameter RANGE when you call `new DiscreteVector(origin, RANGE)`.
For example consider the set of weights: `weights = [1, 3, 9]`.
Imagine, you have two identically sets.
What kind of total weight can you assemble with them?
Well, define the trenary vector: `vector = new DiscreteVector(weights, 2)`.
To find all the possible total weights you can use this snippet:
``` javascript
totals = Array(vector.combinations).fill().
  map(() => vector.next().fillWith(weights).reduce((sum, item) => sum + item, 0)).
  sort((a, b) => a - b);
```

Be aware! This library uses ES6 features so you should use node version >= 6.x.x or babelify content.
