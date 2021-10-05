import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberCreationPageComponent } from './prescriber-creation-page.component';

describe('PrescriberCreationPageComponent', () => {
  let component: PrescriberCreationPageComponent;
  let fixture: ComponentFixture<PrescriberCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriberCreationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
