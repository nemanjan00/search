#!/usr/bin/env node

var pdfSearch = require('../pdf');

pdfSearch.open(process.argv[process.argv.length - 1]).then(function(pdf){
	pdfSearch.readAllPages().then(function(pages){
		console.log(pages.join('\n'));
	});
});

