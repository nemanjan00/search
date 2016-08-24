# search

Search PDF, DOC and DOCX files

## Install

```bash
sudo npm install -g unisearch
```

## Bins

Search comes with some bins.

### pdfCat

pdfCat converts pdf to txt and sends it to output. 

```bash
pdfCat pdf.pdf
```

## Libs

### pdfSearch

You can use pdfSearch to read PDF files page by page or whole document.

#### Example

```javascript
var pdfSearch = require('unisearch').pdfSearch;

pdfSearch.open(process.argv[process.argv.length - 1]).then(function(pdf){
	pdfSearch.readAllPages().then(function(pages){
		console.log(pages.join('\n'));
	});
});
```

#### API

##### Promise pdfSearch.open(fileName)

pdfSearch.open will open PDF file and you can use that same object to read that PDF. 

It will return Promise which will resolve when pdfSearch is ready to read pages. 

##### Promise pdfSearch.readAllPages()

pdfSearch.readAllPages will return Promise for Array of strings with text from pages. 

##### Promise pdfSearch.readPage(pageNum)

pdfSearch.readPage will return promise for string which is content of that page

## Credits

pdf.js by Mozilla

## Author

Nemanja Nedeljković
