import { ComponentFixture, TestBed } from '@angular/core/testing';

import ToyBrowseComponent from './toy-browse.component';

describe('ToyBrowseComponent', () => {
  let component: ToyBrowseComponent;
  let fixture: ComponentFixture<ToyBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyBrowseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToyBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
