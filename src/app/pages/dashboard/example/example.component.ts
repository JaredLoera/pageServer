import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TutorialService } from '../../../services/tutorial.service';
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

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

  constructor(private route: ActivatedRoute,private tutorialService:TutorialService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getDocument();
  }
  getDocument() {
   this.tutorialService.getTutorial(this.id).subscribe((data:Blob) => {
      const url = window.URL.createObjectURL(data);
      this.pdfSrc = url;
    })
  }
}
