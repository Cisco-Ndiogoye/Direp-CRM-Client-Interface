import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersListPageComponent } from './prescribers-list-page.component';

describe('PrescribersListPageComponent', () => {
  let component: PrescribersListPageComponent;
  let fixture: ComponentFixture<PrescribersListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribersListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
