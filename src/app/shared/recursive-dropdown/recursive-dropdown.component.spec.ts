import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveDropdownComponent } from './recursive-dropdown.component';

describe('RecursiveDropdownComponent', () => {
  let component: RecursiveDropdownComponent;
  let fixture: ComponentFixture<RecursiveDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursiveDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
