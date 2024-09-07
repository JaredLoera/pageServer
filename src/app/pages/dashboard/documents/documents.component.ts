import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsService } from '../../../services/documents.service';
import { Document } from '../../../models/documents';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit{
  constructor(private documentsService:DocumentsService) { }

  
  documents: Document[] = [];
  ngOnInit(): void {  
    this.documentsService.get().subscribe((documents:Document[])=>{
      this.documents = documents;
    });
   
  }
  files = [
    { name: 'CALLSPROCEDIM...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'desktop.ini', icon: 'bi bi-file-earmark' },
    { name: 'index.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ranchos_selects.p...', icon: 'bi bi-file-earmark-code' },
    { name: 'seguroIndex.php', icon: 'bi bi-file-earmark-code' },
    { name: 'verificar_login.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ZacredBaseDatos...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'CALLSPROCEDIM...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'desktop.ini', icon: 'bi bi-file-earmark' },
    { name: 'index.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ranchos_selects.p...', icon: 'bi bi-file-earmark-code' },
    { name: 'seguroIndex.php', icon: 'bi bi-file-earmark-code' },
    { name: 'verificar_login.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ZacredBaseDatos...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'CALLSPROCEDIM...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'desktop.ini', icon: 'bi bi-file-earmark' },
    { name: 'index.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ranchos_selects.p...', icon: 'bi bi-file-earmark-code' },
    { name: 'seguroIndex.php', icon: 'bi bi-file-earmark-code' },
    { name: 'verificar_login.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ZacredBaseDatos...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'CALLSPROCEDIM...', icon: 'bi bi-file-earmark-pdf' },
    { name: 'desktop.ini', icon: 'bi bi-file-earmark' },
    { name: 'index.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ranchos_selects.p...', icon: 'bi bi-file-earmark-code' },
    { name: 'seguroIndex.php', icon: 'bi bi-file-earmark-code' },
    { name: 'verificar_login.php', icon: 'bi bi-file-earmark-code' },
    { name: 'ZacredBaseDatos...', icon: 'bi bi-file-earmark-pdf' }
  ];
}
