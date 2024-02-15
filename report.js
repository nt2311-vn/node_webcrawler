/**
 * Sort the pages objects
 * @param {object} pages - The page objects contain url we crawled
 * @returns {Array} Returns the array of url sorted
 */

const sortPages = (pages) => {
	const result = Object.entries(pages).sort((a, b) => b[1] - a[1]);

	return result;
};

module.exports = {
	sortPages,
};
