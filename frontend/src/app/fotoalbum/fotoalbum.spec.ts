import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotoalbum } from './fotoalbum';

describe('Fotoalbum', () => {
  let component: Fotoalbum;
  let fixture: ComponentFixture<Fotoalbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fotoalbum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fotoalbum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
