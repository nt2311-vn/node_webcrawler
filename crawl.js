/**
 * Normalize all the input url to a single one acceptable url
 * @param {string} urlStr - The string url input
 * @returns {string} returns the standardlize url
 */
const normalizeURL = (urlStr) => {
	[protocol, extractURL] = urlStr.split("://");

	if (!extractURL || extractURL.length === 0) {
		return "";
	}

	return extractURL.slice(0, extractURL.length - 1);
};

module.exports = {
	normalizeURL,
};
