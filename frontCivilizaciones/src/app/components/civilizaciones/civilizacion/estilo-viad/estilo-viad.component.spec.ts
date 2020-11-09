import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloViadComponent } from './estilo-viad.component';

describe('EstiloViadComponent', () => {
  let component: EstiloViadComponent;
  let fixture: ComponentFixture<EstiloViadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstiloViadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloViadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
