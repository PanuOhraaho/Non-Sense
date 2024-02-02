import { CurrencyPipe } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-non-sense',
  standalone: true,
  imports: [],
  templateUrl: './non-sense.component.html',
  styleUrl: './non-sense.component.css'
})
export class NonSenseComponent {
  placeholder = "jotai";
  output = "";
  value = "";
  shuffle(event: Event) {
    let userInput = event.target as HTMLSelectElement;
    let temp: string[] = userInput.value.split('');
    let tempLength = temp.length;
    let rearranged = "";
    let temp2: string[] = [];

    if(temp.length > 1) {
      for(let i = 0; i < tempLength; i++) {
        let index = Math.round(Math.random() * (temp.length-1));
        temp2[i] = temp[index];
        temp.splice(index, 1);
      }

      for(let i = 0; i < temp2.length; i++) {
        rearranged += temp2[i];
      }
      this.output = rearranged;
    } else {
      this.output = temp[0];
    }
    
  }

  
}
