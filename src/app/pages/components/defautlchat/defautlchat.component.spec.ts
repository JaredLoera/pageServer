import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefautlchatComponent } from './defautlchat.component';

describe('DefautlchatComponent', () => {
  let component: DefautlchatComponent;
  let fixture: ComponentFixture<DefautlchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefautlchatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefautlchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
