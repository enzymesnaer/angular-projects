import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumer: number){
    if (firedNumer % 2 === 0){
      this.evenNumbers.push(firedNumer);
    }else{
      this.oddNumbers.push(firedNumer);
    }
  }  
}
