import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTutorialModalComponent } from '../../components/add-tutorial-modal/add-tutorial-modal.component';
import { Tutorial } from '../../../models/tutorial';
import { TutorialService } from '../../../services/tutorial.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';

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
export class TutoComponent implements OnInit {

  user: User | null = {};
  tutorials: Tutorial[] = [];
  constructor(public dialog: MatDialog,private tutorialService:TutorialService,private authService:AuthService) { }
  showModal = false;
    //buscador
    ngOnInit(): void {
      this.tutorialService.get().subscribe((data:Tutorial[]) => {
        this.tutorials = data;
      });
      this.user =  this.authService.getProfile();
    }

  onKeyDown(event: KeyboardEvent): void {
    const input = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter') {
      
    }
  }
}
