import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTutorialModalComponent } from '../../components/add-tutorial-modal/add-tutorial-modal.component';

@Component({
  selector: 'app-tuto',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AddTutorialModalComponent
  ],
  templateUrl: './tuto.component.html',
  styleUrl: './tuto.component.css'
})
export class TutoComponent {

  constructor(public dialog: MatDialog) { }
  showModal = false;

  onKeyDown(event: KeyboardEvent): void {
    const input = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter') {
      
    }
  }
}
