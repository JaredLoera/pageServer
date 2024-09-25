import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TutorialService } from '../../../services/tutorial.service';
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { tutorialPdf } from '../../../models/tutorial';
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ CommonModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [NgxExtendedPdfViewerService],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  id: string = '';
  pdfSrc: string | ArrayBuffer = '';

  tutorial: tutorialPdf = {};

  constructor(private route: ActivatedRoute,private tutorialService:TutorialService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    //with this method we can get the document from the server
  // this.getDocument();
   this.getDataDocument();
  }
  getDocument() {
   this.tutorialService.getTutorial(this.id).subscribe((data:Blob) => {
      const url = window.URL.createObjectURL(data);
      this.pdfSrc = url;
    })
  }
  getDataDocument() {
    this.tutorialService.getDocumentData(this.id).subscribe((data:tutorialPdf) => {
      this.tutorial = data;
    }
    )
  }
}
