import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-imgsave',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './imgsave.component.html',
  styleUrl: './imgsave.component.css'
})
export class ImgsaveComponent {
  public form: FormGroup;
  selectedFile: File | null = null;
  @Output() close = new EventEmitter<void>();

  constructor(private userService: UserService,private fb: FormBuilder,) { 
    this.form = this.fb.group({
      avatar: [null]
    });
  }

 

  closeModal() {
    this.close.emit();
  }

  fileSelected = false;
  fileName = '';
  


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileSelected = true;
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }
  onSubmit(): void {
    if (this.fileSelected) {
      const formData = new FormData();
      formData.append('avatar', this.selectedFile as Blob, this.selectedFile?.name);
      this.userService.uploadAvatar(formData).subscribe(() => {
        this.closeModal();
      });
    }
  }
  }
