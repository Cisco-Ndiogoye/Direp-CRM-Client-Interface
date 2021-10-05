import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersDetailsPageComponent } from './prescribers-details-page.component';

describe('PrescribersDetailsPageComponent', () => {
  let component: PrescribersDetailsPageComponent;
  let fixture: ComponentFixture<PrescribersDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribersDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
