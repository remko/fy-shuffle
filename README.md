# [fy-shuffle: Customizable Fisher-Yates shuffle](http://el-tramo.be/fy-shuffle)

Shuffles an array using the [Fisher-Yates algorithm](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle). The difference between this implementation and others out there is that 
the shuffle is parameterized with a random number generator function, so it can
be used to generate predictable results (using e.g. a [Linear Congruential Generator](http://el-tramo.be/lcg-random/)).


## Installation

    npm install fy-shuffle --save


## Usage

A call to the exported function returns a shuffled version of the given array.

	var fyShuffle = require("fy-shuffle");

	// Outputs [2, 1, 4, 3], or some permutation of it.
	console.log(fyShuffle([1, 2, 3, 4]));

	// Pass a custom random number generator.
	// Always outputs [1, 4, 2, 3].
	console.log(fyShuffle([1, 2, 3, 4], function () { return 0.5; }));


## API

### `fyShuffle(array, [random])`

Shuffles the given array.

- **`array`** - *array*  
    Array to shuffle

- **`random`** - *function*  
    The random number generator function to use. Must return a number between 0.  
    inclusive and 1 exclusive.  
    Default: `Math.random`


## Project Status

[![Build Status](https://travis-ci.org/remko/fy-shuffle.svg?branch=master)](https://travis-ci.org/remko/fy-shuffle)

[![Coverage Status](https://coveralls.io/repos/remko/fy-shuffle/badge.png?branch=master)](https://coveralls.io/r/remko/fy-shuffle?branch=master)

[![Browser Support](https://ci.testling.com/remko/fy-shuffle.png)
](https://ci.testling.com/remko/fy-shuffle)
