import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gaesteliste } from './gaesteliste';

describe('Gaesteliste', () => {
  let component: Gaesteliste;
  let fixture: ComponentFixture<Gaesteliste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gaesteliste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gaesteliste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
