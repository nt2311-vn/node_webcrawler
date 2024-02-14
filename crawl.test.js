const { test, expect } = require("@jest/globals");
const { normalizeURL, getURLsFromHTML } = require("./crawl.js");

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

test("getURLsFromHTML absolute", () => {
	const inputHTMLBody = `
<html>
  <body>
    <a href="https://blog.boot.dev/">
      Boot.dev Blog
    </a>
  </body>
</html>
`;

	const inputBaseURL = "https://blog.boot.dev";
	const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
	const expected = ["https://blog.boot.dev/"];
	expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
	const inputHTMLBody = `
<html>
  <body>
    <a href="/path/">
      Boot.dev Blog
    </a>
  </body>
</html>
`;

	const inputBaseURL = "https://blog.boot.dev";
	const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
	const expected = ["https://blog.boot.dev/path/"];
	expect(actual).toEqual(expected);
});

test("getURLsFromHTML both", () => {
	const inputHTMLBody = `
<html>
  <body>
    <a href="https://blog.boot.dev/path/">
      Boot.dev Blog
    </a>
    <a href="/path1/">
    </a>
  </body>
</html>
`;

	const inputBaseURL = "https://blog.boot.dev";
	const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
	const expected = [
		"https://blog.boot.dev/path/",
		"https://blog.boot.dev/path1/",
	];
	expect(actual).toEqual(expected);
});

test("getURLsFromHTML bad url", () => {
	const inputHTMLBody = `
<html>
  <body>
    <a href="bad url">
      Boot.dev Blog
    </a>
  </body>
</html>
`;

	const inputBaseURL = "https://blog.boot.dev";
	const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
	const expected = [];
	expect(actual).toEqual(expected);
});
