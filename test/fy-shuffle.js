'use strict';

var shuffle = require('../fy-shuffle');
var expect = require('chai').expect;

describe('fy-shuffle', function () {
	var rand = function () { return 0.5; };

	it('should work with empty array', function () {
		expect(shuffle([])).to.eql([]);
	});

	it('should work with a singleton', function () {
		expect(shuffle([1])).to.eql([1]);
	});

	it('should work with a list', function () {
		expect(shuffle([1, 2, 3, 4, 5], rand)).to.eql([1, 4, 2, 5, 3]);
	});
});
