import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToyComponent } from './add-toy.component';

describe('AddToyComponent', () => {
  let component: AddToyComponent;
  let fixture: ComponentFixture<AddToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
