import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() counterChanged = new EventEmitter<number>();

  counter = 0;
  intervalRef: any;

  constructor() {}

 /**
  * Method to start counting/start interval
  */
  startCount() {
    this.intervalRef = setInterval(() => {
      this.counter++;
      this.counterChanged.emit(this.counter);
    }, 1000);
  }

  /**
   * Method to stop the count/stop Interval
   */
  stopCount(){
    clearInterval(this.intervalRef);
  }
}
