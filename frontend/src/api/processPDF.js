import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.min'; 

const extractTextFromPDF = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const pdfData = new Uint8Array(event.target.result);

      pdfjsLib.getDocument({ data: pdfData }).promise.then((pdf) => {
        const maxPages = pdf.numPages;
        let text = '';

        const getPageText = (pageNumber) => {
          if (pageNumber > maxPages) {
            resolve(text);
            return;
          }

          pdf.getPage(pageNumber).then((page) => {
            page.getTextContent().then((textContent) => {
              text += textContent.items.map((item) => item.str + ' ').join('');
              getPageText(pageNumber + 1);
            });
          });
        };

        getPageText(1);
      }).catch((error) => {
        reject(error);
      });
    };

    reader.readAsArrayBuffer(file);
  });
};

export default extractTextFromPDF;
