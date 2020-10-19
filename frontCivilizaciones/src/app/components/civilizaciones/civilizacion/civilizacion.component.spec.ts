import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizacionComponent } from './civilizacion.component';

describe('CivilizacionComponent', () => {
  let component: CivilizacionComponent;
  let fixture: ComponentFixture<CivilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
