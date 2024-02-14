function main() {
	if (process.argv.length < 3) {
		console.log("No website provided");
		process.exit(1);
	}

	console.log("Start crawling web");
}

main();
