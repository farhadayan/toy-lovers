import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyCardContainerComponent } from './toy-card-container.component';

describe('ToyCardContainerComponent', () => {
  let component: ToyCardContainerComponent;
  let fixture: ComponentFixture<ToyCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToyCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
