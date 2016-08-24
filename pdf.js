var pdfJs = require("./libs/pdf");
pdfJs.disableWorker = true;

var fs = require('fs');

var pdfSearch = module.exports = {
	pdf: undefined,

	open: function(url){
		var promise = new Promise(function(resolve, reject){
			fs.readFile(url, function (err, data) {
				var data_array = new Uint8Array(data);
				pdfJs.getDocument(data_array).then(function (pdf) {
					pdfSearch.pdf = pdf;
					resolve(pdf);
				});
			});
		});

		return promise;
	},
	readPage: function(id){
		var promise = new Promise(function(resolve, reject){
			pdfSearch.pdf.getPage(id).then(function(page){
				page.getTextContent().then(function(page){
					page = page.items;

					page = page.map(function(item){
						return item.str;
					});

					page = page.join(' ');

					resolve(page);
				});
			});
		});

		return promise;
	},

	readAllPages: function(){
		var promise = new Promise(function(resolve, reject){
			var pages = [];
			
			for(var i = 0; i < pdfSearch.pdf.pdfInfo.numPages; i++){
				pages.push(pdfSearch.readPage(i + 1));
			}

			Promise.all(pages).then(function(pages){
				resolve(pages);
			});
		});

		return promise;
	}
};

