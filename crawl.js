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
};
