import { Component,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-add-tutorial-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-tutorial-modal.component.html',
  styleUrl: './add-tutorial-modal.component.css'
})
export class AddTutorialModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
