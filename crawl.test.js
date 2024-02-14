const { test, expect } = require("@jest/globals");
const { normalizeURL } = require("./crawl.js");

test("normalizeURL strip protocol", () => {
	const input = "https://google.com.vn/path";
	const actual = normalizeURL(input);
	const expected = "google.com.vn/path";
	expect(actual).toEqual(expected);
});

test("normalizeURL trim trailling slash", () => {
	const input = "https://google.com.vn/path/";
	const actual = normalizeURL(input);
	const expected = "google.com.vn/path";
	expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
	const input = "https://GOOGLE.com.VN/path/";
	const actual = normalizeURL(input);
	const expected = "google.com.vn/path";
	expect(actual).toEqual(expected);
});
