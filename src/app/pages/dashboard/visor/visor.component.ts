import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocumentsService } from '../../../services/documents.service';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'app-visor',
  standalone: true,
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [NgxExtendedPdfViewerService],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.css'
})
export class VisorComponent implements OnInit {
  id: string = '';
  pdfSrc: string | ArrayBuffer = '';
  constructor(private route: ActivatedRoute, private documentService: DocumentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getDocument();
  }
  getDocument() {
    this.documentService.download(this.id).subscribe((data: Blob) => {
      const url = window.URL.createObjectURL(data);
      this.pdfSrc = url;
    })
  }
}
