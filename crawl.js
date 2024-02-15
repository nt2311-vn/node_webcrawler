const { JSDOM } = require("jsdom");

/**
 * Normalize all the input url to a single one acceptable url
 * @param {string} urlStr - The string url input
 * @returns {string} returns the standardlize url
 */
const normalizeURL = (urlStr) => {
	const { hostname, pathname } = new URL(urlStr);
	const hostPath = `${hostname}${pathname}`;

	if (hostPath.length > 0 && hostPath.slice(-1) === "/") {
		return hostPath.slice(0, -1);
	}
	return hostPath;
};

/**
 * Extract an array of url given in the htmlbody
 * @param {string} htmlBody - The body html representation in string format
 * @param {string} baseURL - The base url of the page
 * @returns {Array<string>} Returns array of urls in the page html
 */
const getURLsFromHTML = (htmlBody, baseURL) => {
	const urls = [];
	const dom = new JSDOM(htmlBody);
	const linkElements = dom.window.document.querySelectorAll("a");

	for (const linkElement of linkElements) {
		if (linkElement.href.slice(0, 1) === "/") {
			try {
				const urlObj = new URL(`${baseURL}${linkElement.href}`);
				urls.push(urlObj.href);
			} catch (err) {
				console.log(`Error with relative url:${err.message}`);
			}
		} else {
			try {
				const urlObj = new URL(linkElement.href);
				urls.push(urlObj.href);
			} catch (err) {
				console.log(`Error with absolute url:${err.message}`);
			}
		}
	}
	return urls;
};

/**
 * Crawling page of the url
 * @param {string} baseURL - The base url of the page
 * @param {string} currentURL -  The current url we access to
 * @param {object} pages - The object of pages we have crawled
 * @returns {string} returns the string of htmlbody
 */
const crawlPage = async (baseURL, currentURL, pages) => {
	const baseURLObj = new URL(baseURL);
	const currentURLObj = new URL(currentURL);

	if (baseURLObj.hostname !== currentURLObj.hostname) {
		return pages;
	}

	const normalizeCurrentURL = normalizeURL(currentURL);

	if (pages[normalizeCurrentURL] > 0) {
		pages[normalizeCurrentURL]++;
		return pages;
	}

	pages[normalizeCurrentURL] = 1;

	console.log(`Actively crawling: ${currentURL}`);

	try {
		const resp = await fetch(currentURL);

		if (resp.status > 399) {
			console.log(
				`Error with status code: ${resp.status}, on page: ${currentURL}`,
			);
			return;
		}

		const contentType = resp.headers.get("content-type");

		if (!contentType.includes("text/html")) {
			console.log(
				`Non html response, content type: ${contentType}, on page: ${currentURL}`,
			);
		}

		const htmlBody = await resp.text();
		const nextURLs = getURLsFromHTML(htmlBody, baseURL);

		for (const nextURL of nextURLs) {
			pages = await crawlPage(baseURL, nextURL, pages);
		}

		return pages;
	} catch (err) {
		console.log(`Error on fetch page: ${currentURL}, msg: ${err.message}`);
	}
};

module.exports = {
	normalizeURL,
	getURLsFromHTML,
	crawlPage,
};
