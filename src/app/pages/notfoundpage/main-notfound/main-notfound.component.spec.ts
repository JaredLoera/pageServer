import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNotfoundComponent } from './main-notfound.component';

describe('MainNotfoundComponent', () => {
  let component: MainNotfoundComponent;
  let fixture: ComponentFixture<MainNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNotfoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
