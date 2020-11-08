import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosVidaComponent } from './estilos-vida.component';

describe('EstilosVidaComponent', () => {
  let component: EstilosVidaComponent;
  let fixture: ComponentFixture<EstilosVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosVidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
