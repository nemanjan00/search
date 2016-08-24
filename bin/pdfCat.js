var path = require("path");
var pdfSearch = require(path.join(__dirname, '../pdf'));

pdfSearch.open(process.argv[process.argv.length - 1]).then(function(pdf){
	pdfSearch.readAllPages().then(function(pages){
		console.log(pages.join('\n'));
	});
});

