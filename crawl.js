/**
 * Normalize all the input url to a single one acceptable url
 * @param {string} urlStr - The string url input
 * @returns {string} returns the standardlize url
 */
const normalizeURL = (urlStr) => {
	const { hostname, pathname } = new URL(urlStr);
	return `${hostname}${pathname}`;
};

module.exports = {
	normalizeURL,
};
