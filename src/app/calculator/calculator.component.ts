import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  currentNumber: string = '';
  previousNumber: string = '';
  operator: string = '';

  addToCurrentNumber(number: string) {
    if (this.currentNumber === '0') {
      this.currentNumber = number;
    } else if (this.operator){
      this.currentNumber = ''
      this.currentNumber += number;
    } else {
      this.currentNumber += number
    }
  }

  setOperator(operator: string) {
    this.operator = operator;
    this.previousNumber = this.currentNumber;
  }

  clear() {
    this.currentNumber = '0';
    this.previousNumber = '';
    this.operator = '';
  }

  calculate() {
    const prev = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);

    switch (this.operator) {
      case '+':
        this.currentNumber = (prev + current).toString();
        break;
      case '-':
        this.currentNumber = (prev - current).toString();
        break;
      case '*':
        this.currentNumber = (prev * current).toString();
        break;
      case '/':
        this.currentNumber = (prev / current).toString();
        break;
    }
  }
}
