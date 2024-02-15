const { test, expect } = require("@jest/globals");
const { sortPages } = require("./report.js");

test("sortPages 2 pages", () => {
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

test("sortPages 5 pages", () => {
	const input = {
		"https://google.com.vn": 2,
		"https://google.com.vn/images": 6,
		"https://google.com.vn/search": 8,
		"https://google.com.vn/ads": 2,
		"https://google.com.vn/gemini": 3,
	};

	const actual = sortPages(input);
	const expected = [
		["https://google.com.vn/search", 8],
		["https://google.com.vn/images", 6],
		["https://google.com.vn/gemini", 3],
		["https://google.com.vn", 2],
		["https://google.com.vn/ads", 2],
	];

	expect(actual).toEqual(expected);
});
