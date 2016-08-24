var pdfSearch = require('./pdf');

pdfSearch.open('./pdf.pdf').then(function(pdf){
	pdfSearch.readAllPages().then(function(pages){
		console.log(pages.join('\n'));
	});
});

