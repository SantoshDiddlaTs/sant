import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-pdf-file',
  templateUrl: './pdf-file.component.html',
  styleUrls: ['./pdf-file.component.css']
})
export class PdfFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  downloadPdf(id) {
    window.open(`../../../assets/${id}`,'mywindow',"status=1,toolbar=1")
    const pdfUrl = `../../../assets/${id}`;
    const pdfName = 'pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
