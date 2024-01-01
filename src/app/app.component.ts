import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfNumber: number[] = [];

  constructor(){}

  /**
   * Method to push counter into an array
   * @param event Counter number from game control component
   */
  counterHandler(event: number) {
    this.listOfNumber.push(event);
  }
}
