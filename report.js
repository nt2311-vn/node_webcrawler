/**
 * Print and format the reprot of our crawling
 * @param {Array} pages - The sorted pages as array
 * @returns {void} Return nothing and this is mainly formatted utility
 */

const printReport = (pages) => {
	for (const page of pages) {
		const [pageURL, pageAppear] = page;
		console.log("==================");
		console.log("REPORT");
		console.log("==================");
		console.log(`Found ${pageURL} ${pageAppear} times`);
		console.log("==================");
		console.log("END REPORT");
		console.log("==================");
	}
};

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
	printReport,
};
