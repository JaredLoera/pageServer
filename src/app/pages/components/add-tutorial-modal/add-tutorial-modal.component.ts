import { Component,Output, EventEmitter ,OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Tutorial,PDFTutorial } from '../../../models/tutorial';
import { TutorialService } from '../../../services/tutorial.service';
import { TagsService } from '../../../services/tags.service';
import { Tag } from '../../../models/tag';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add-tutorial-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
   
  ],
  templateUrl: './add-tutorial-modal.component.html',
  styleUrl: './add-tutorial-modal.component.css'
})
export class AddTutorialModalComponent implements OnInit {
 
  @Output() close = new EventEmitter<void>();

  public tutorialForm: FormGroup;
  public formData = new FormData();
  public tags: Tag[] = [];
  allTags: string[] = [];
  filteredTags: string[] = [];
  selectedTags: Tag[] = [];
  selectedFile: File | null = null;
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

  public tutorial: Tutorial = {
    title: '',
    description: ''
  };

  constructor(private authService:AuthService,private tagsService:TagsService,private fb: FormBuilder, private tutorialService: TutorialService,private router:Router) {
    this.tutorialForm = this.fb.group({
      title: [this.tutorial.title, [Validators.required]],
      description: [this.tutorial.description, [Validators.required]],
      selectedTags: [this.selectedTags],
      file: [this.selectedFile]
    });
  }

  ngOnInit(): void {
    this.tagsService.get().subscribe((data:Tag[]) => {
     this.tags = data;
    });
  }

  submitTutorial() {
    this.tutorial = this.tutorialForm.value;
    const formData = new FormData();
    formData.append('title', this.tutorialForm.get('title')?.value);
    formData.append('description', this.tutorialForm.get('description')?.value);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile as Blob, this.selectedFile?.name);
    }

    this.selectedTags.forEach((tag, index) => {
      if (tag.id) { 
        formData.append(`tags[${index}]`, tag.id.toString()); 
      }
    });
    this.tutorialService.create(formData).subscribe((data:PDFTutorial) => {
      this.router.navigate(['/dashboard/tutorial/'+data.tutorial.uniqueId]);
    });
  }

  closeModal() {
    this.close.emit();
  }

  filterTags(query: string) {
    if (query) {
      this.filteredTags = this.allTags.filter(tag => tag.toLowerCase().includes(query.toLowerCase()));
    } else {
      this.filteredTags = [...this.allTags];
    } //falta no funciona xd
  }

  addTag(tag: Tag) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
      this.tutorialForm.get('tagInput')?.setValue(''); 
      this.filterTags('');
    }
  }

  removeTag(tag: Tag) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
  }
}
