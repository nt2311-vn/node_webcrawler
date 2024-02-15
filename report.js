/**
 * Sort the pages objects
 * @param {object} pages - The page objects contain url we crawled
 * @returns {Array} Returns the array of url sorted
 */
const sortPages = (pages) => {
	const result = Object.entries(pages).sort((a, b) => b[1] - a[1]);

	return result;
};

/**
 * Print and format the reprot of our crawling
 * @param {Array} pages - The sorted pages as array
 * @returns {void} Return nothing and this is mainly formatted utility
 */

const printReport = (pages) => {
	const sortedPages = sortPages(pages);
	console.log("==================");
	console.log("------REPORT------");
	console.log("==================");
	for (const page of sortedPages) {
		const [pageURL, pageAppear] = page;
		console.log(`Found ${pageURL} ${pageAppear} times`);
	}
	console.log("==================");
	console.log("----END REPORT----");
	console.log("==================");
};

module.exports = {
	sortPages,
	printReport,
};
