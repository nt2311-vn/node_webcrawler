const { test, expect } = require("@jest/globals");
const { sortPages } = require("./report.js");

test(sortPages, () => {
	const input = {
		"https://google.com.vn": 2,
		"https://google.com.vn/images": 6,
	};

	const actual = sortPages(input);
	const expected = [
		["https://google.com.vn/images", 6],
		["https://google.com.vn", 2],
	];

	expect(actual).toEqual(expected);
});
