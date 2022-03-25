import { Component } from '@angular/core';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  
  screenOperation: string = '0';
  screenResult: string = '0';
  operationComplete: boolean = false;

  constructor() { }

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

  public operation(operation: string): void {
    this.screenResult = this.screenResult + operation;
  }

  public calcOperation(): void {
    let result = eval(this.screenResult.replace('÷', '/'));
    this.screenResult = result.toString().replace('/', '÷');
  }

  public lastValue (){
    return this.screenOperation.substring(this.screenOperation.length-1);
  }

  public writeOperation (text: any){
    if (this.screenOperation == '0' && text != '.') this.screenOperation = '';

    if(this.operationComplete && isNaN(text)) {
      this.screenOperation = this.screenResult;
      this.operationComplete = false;
    }

    if(this.operationComplete && !isNaN(text)) {
      this.screenOperation = '';
      this.screenResult = '0';
      this.operationComplete = false;
    }

    if(isNaN(parseInt(this.lastValue())) && isNaN(text)){
      this.screenOperation = this.screenOperation.substring(0, this.screenOperation.length-1);
    } else if(this.screenOperation.length < 24) {
      this.screenOperation += text;
    }
  }

  public point(text: string){
    if(this.screenOperation == '0' && text=='.') this.screenOperation = '0.';
    else if(this.screenOperation.indexOf('.') == -1){
      this.screenOperation += '.'
    }
    this.screenResult = this.screenOperation;
  }

  public changeSign () {
    var lastNumber = '';
    var position = 0;
    
    if(!isNaN(parseFloat(this.lastValue()))) {
      for (var i = this.screenOperation.length-1; i>0; i--){
        if(isNaN(parseFloat(this.screenOperation[i]))) {
          position = i+1;
          break;
        }
      }
    }
    lastNumber = this.screenOperation.substring(position);
    this.screenOperation = this.screenOperation.replace(lastNumber, '(' + parseFloat(lastNumber) * -1 + ')');
    this.screenResult = this.screenOperation;
  }

  public resetScreen() {
    this.screenOperation = '0';
    this.screenResult = '0';
  }

  public porcentage(){

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


