import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionesComponent } from './religiones.component';

describe('ReligionesComponent', () => {
  let component: ReligionesComponent;
  let fixture: ComponentFixture<ReligionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
