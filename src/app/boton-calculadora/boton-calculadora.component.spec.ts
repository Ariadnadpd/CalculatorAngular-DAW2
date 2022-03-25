import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCalculadoraComponent } from './boton-calculadora.component';

describe('BotonCalculadoraComponent', () => {
  let component: BotonCalculadoraComponent;
  let fixture: ComponentFixture<BotonCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
