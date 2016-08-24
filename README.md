# search

Search PDF, DOC and DOCX files

## Install

```bash
sudo npm install -g unisearch
```

## Bins

```search``` comes with some bins.

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
