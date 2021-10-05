import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberModificationPageComponent } from './prescriber-modification-page.component';

describe('PrescriberModificationPageComponent', () => {
  let component: PrescriberModificationPageComponent;
  let fixture: ComponentFixture<PrescriberModificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriberModificationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberModificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
