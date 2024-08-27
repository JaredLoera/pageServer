import { Component,Output, EventEmitter  } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Tutorial } from '../../../models/tutorial';


@Component({
  selector: 'app-add-tutorial-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-tutorial-modal.component.html',
  styleUrl: './add-tutorial-modal.component.css'
})
export class AddTutorialModalComponent {
  @Output() close = new EventEmitter<void>();

  public tutorialForm: FormGroup;
  public tutorial: Tutorial = {
    title: '',
    description: ''
  };

  constructor(private fb: FormBuilder) {
    this.tutorialForm = this.fb.group({
      title: [this.tutorial.title, [Validators.required]],
      description: [this.tutorial.description, [Validators.required]]
    });
  }

  submitTutorial() {
    this.tutorial = this.tutorialForm.value;
    this.closeModal();
  }
  
  closeModal() {
    this.close.emit();
  }
}
