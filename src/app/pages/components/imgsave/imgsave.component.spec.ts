import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsaveComponent } from './imgsave.component';

describe('ImgsaveComponent', () => {
  let component: ImgsaveComponent;
  let fixture: ComponentFixture<ImgsaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgsaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
