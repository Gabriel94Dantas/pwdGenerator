import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Password Generator by Dantas';
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  passwordLength = 0;


  onButtonClick(){
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvxwyz";
    const symbols = "!@#$%^&*(){}[]?><,.";
    this.password = '';

    let validChars = '';

    if(this.useLetters){
      validChars = validChars + letters;
    }

    if(this.useNumbers){
      validChars = validChars + numbers;
    }

    if(this.useSymbols){
      validChars = validChars + symbols;
    }

    for(let i = 0; i < this.passwordLength; i++){
      const index = Math.floor(Math.random() * validChars.length);
      this.password = this.password + validChars[index];
    }

  }

  onChangeLetters(){
    this.useLetters = !this.useLetters;
    return this.useLetters;
  }

  onChangeNumbers(){
    this.useNumbers = !this.useNumbers;
    return this.useNumbers;
  }

  onChangeSymbols(){
    this.useSymbols = !this.useSymbols;
    return this.useSymbols;
  }

  onChangeLength(event : any){
    const parsedLength = parseInt(event.target.value);
    if(!isNaN(parsedLength)){
      this.passwordLength = parsedLength;
    }
  }

  isDisabled(){
    return !(this.passwordLength && (this.useNumbers || this.useLetters || this.useSymbols));
  }

}
