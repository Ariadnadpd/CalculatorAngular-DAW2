import { Component } from '@angular/core';
import { last } from 'rxjs';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  
  screenOperation: string = '0';
  screenResult: string = '0';

  constructor() { }

  // Method indicating the number
  public setNumber(number: string): void {
    if (this.screenResult === '0') {      
      this.screenResult = '';
    }
    if(this.screenOperation === '0'){
      this.screenOperation = '';
    }
    this.screenOperation = '' + this.screenResult + number;
    this.screenResult = '' + this.screenResult + number;
  }

  // Method indicating the operation
  public operation(operation: string): void {
    this.screenResult = this.screenResult + operation;
  }

  // Method that performs the operation
  public calcOperation(): void {
    let result = eval(this.screenResult.replace('÷', '/'));
    this.screenResult = result.toString().replace('/', '÷');
  }

  // Method that return the last number
  public lastValue (){
    return this.screenOperation.substring(this.screenOperation.length-1);
  }

  // Method for the decimal comma
  public comma(text: string){
    if(this.screenOperation == '0' && text=='.') this.screenOperation = '0.';
    else if(this.screenOperation.indexOf('.') == -1){
      this.screenOperation += '.'
    }
    this.screenResult = this.screenOperation;
  }

  // Method that changes the sign
  public changeSign () {
    var lastNumber = '';
    var position = 0;
    var valor = '';
    let control;

    if(!isNaN(parseFloat(this.lastValue()))) {
      for (var i = this.screenOperation.length-1; i>0; i--){
        if(isNaN(parseFloat(this.screenOperation[i]))) {
          if(this.screenOperation[i] === '-' || this.screenOperation[i] === '+' || this.screenOperation[i] === '*' || this.screenOperation[i] === '/'){
            valor = this.screenOperation[i];
            control=true;
          } 
          position = i+1;
          break;
        }
      }
    }
    
    if(control == true){
      lastNumber = valor+this.screenOperation.substring(position);
      this.screenOperation = this.screenOperation.replace(lastNumber,valor + '(' + parseFloat(lastNumber.substring(1,lastNumber.length)) * -1 + ')');
    } else {
      lastNumber = this.screenOperation.substring(position);
      this.screenOperation = this.screenOperation.replace(lastNumber, '(' + parseFloat(lastNumber) * -1 + ')');
    }

    this.screenResult = this.screenOperation;
  }

  // Method that resets the screen
  public resetScreen() {
    this.screenOperation = '0';
    this.screenResult = '0';
  }

  // Method that performs a percentage
  public percentage(){

    let cont = ' ';
    let symbol = ' ';
    let porcentage = ' ';
    let control;
    let control_length = 0;
      
    for(var i=0; i<this.screenOperation.length; i++){
      control_length++;
      if(this.screenOperation[i] != '*' && this.screenOperation[i] != '+' && this.screenOperation[i] != '-' && this.screenOperation[i] != '/'){
        cont +=this.screenOperation[i];
          
      } else if(this.screenOperation[i] === '*' || this.screenOperation[i] === '+' || this.screenOperation[i] === '-' || this.screenOperation[i] === '/'){
        symbol = this.screenOperation[i];
        let p = i+1;
          
        for (var j=p; j<this.screenOperation.length;j++){
            
          porcentage +=this.screenOperation[j];
          if(j == this.screenOperation.length-1){

            switch(symbol){
              case '*':
                this.screenOperation = (parseFloat(cont) * (parseFloat(porcentage) /100)).toString();
                this.screenResult = this.screenOperation;
                control=true;                  
                break;
              case '+':
                this.screenOperation = (parseFloat(cont) + (parseFloat(porcentage)/100)).toString();
                this.screenResult = this.screenOperation;
                control=true;
                break;
              case '-':
                this.screenOperation = (parseFloat(cont) - parseFloat(porcentage) /100).toString();
                this.screenResult = this.screenOperation;
                control=true;
                break;
              case '/':
                this.screenOperation = (parseFloat(cont) / (parseFloat(porcentage) /100)).toString();
                this.screenResult = this.screenOperation;
                control=true;
                break;
              default:
                this.screenResult = this.screenOperation;
            }                            
          }
          p++;
        }
      }
    }

    if(control != true && this.screenOperation.length==control_length){
      this.screenOperation = (parseFloat(this.screenOperation) /100).toString();
      this.screenResult = this.screenOperation;
    }
  }
}
 


