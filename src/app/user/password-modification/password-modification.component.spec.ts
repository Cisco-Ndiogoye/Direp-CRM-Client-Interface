import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordModificationComponent } from './password-modification.component';

describe('PasswordModificationComponent', () => {
  let component: PasswordModificationComponent;
  let fixture: ComponentFixture<PasswordModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
