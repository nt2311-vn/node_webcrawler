/**
 * Extract an array of url given in the htmlbody
 * @param {string} htmlBody - The body html representation in string format
 * @param {string} baseURL - The base url of the page
 * @returns {Array<string>} Returns array of urls in the page html
 */
const getURLsFromHTML = (htmlBody, baseURL) => {
	const urls = [];

	return urls;
};

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

module.exports = {
	normalizeURL,
	getURLsFromHTML,
};
