import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintarComponent } from './pintar.component';

describe('PintarComponent', () => {
  let component: PintarComponent;
  let fixture: ComponentFixture<PintarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
