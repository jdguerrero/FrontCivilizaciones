import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizacionPreviewComponent } from './civilizacion-preview.component';

describe('CivilizacionPreviewComponent', () => {
  let component: CivilizacionPreviewComponent;
  let fixture: ComponentFixture<CivilizacionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilizacionPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizacionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
