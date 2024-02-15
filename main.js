const { crawlPage } = require("./crawl.js");

function main() {
	if (process.argv.length < 3) {
		console.log("No website provided");
		process.exit(1);
	}

	if (process.argv.length > 3) {
		console.log("Too many command line args");
		process.exit(1);
	}

	const baseURL = process.argv[2];
	console.log(`Start crawling website:${baseURL}`);

	const pages = crawlPage(baseURL, baseURL, {});

	for (const page of pages) {
		console.log(page);
	}
}

main();
