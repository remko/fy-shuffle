"use strict";

// Durstenfeld shuffle
// Returns a copy of the array. Could probably use a more efficient algorithm
// here (inside-out?).
module.exports = function (array, rand) {
	var random = rand || Math.random;
	var result = array.slice(0);
	for (var i = result.length - 1; i >= 0; --i) {
		var randomIndex = Math.floor(random()*(i+1));
		var tmp = result[i];
		result[i] = result[randomIndex];
		result[randomIndex] = tmp;
	}
	return result;
};
