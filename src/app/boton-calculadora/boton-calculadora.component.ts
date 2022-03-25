import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-calculadora',
  templateUrl: './boton-calculadora.component.html',
  styleUrls: ['./boton-calculadora.component.css']
})
export class BotonCalculadoraComponent implements OnInit {

  @Input('name') name: string | undefined;

  @Output('value')
  value = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.value.emit(this.name);
  }
}
