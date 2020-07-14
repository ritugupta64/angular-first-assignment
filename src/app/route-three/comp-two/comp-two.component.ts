import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comp-two',
  templateUrl: './comp-two.component.html',
  styles: [
    `
      .btn {
        margin: 10px;
      }
    `,
  ],
})
export class CompTwoComponent implements OnInit {
  @Output('childOutput') childOutput = new EventEmitter();
  @Output('resetOut') resetOut = new EventEmitter();
  @Output('loggerOut') loggerOut = new EventEmitter();

  @Output('pauseOutCount') pauseOutCount = new EventEmitter();
  @Output('startOutCount') startOutCount = new EventEmitter();

  inputField: number = 0;
  resetField: number = 0;
  timer: any;
  disable: boolean = true;
  isPause: boolean = true;
  isTimer: boolean = false;

  logs: any[] = [];
  constructor() {}

  ngOnInit() {}

  sendToParent() {
    this.isPause = !this.isPause;

    if (this.isPause) {
      clearInterval(this.timer);
    }

    if (!this.isPause) {
      this.timer = setInterval(() => {
        if (Number(this.inputField) == 1) {
          clearInterval(this.timer);
        }
        this.childOutput.emit(--this.inputField);
      }, 1000);
    }

    this.loggerOut.emit(this.isPause);

    this.isTimer = true;
  }

  sendToReset() {
   this.isTimer = false;
    this.resetOut.emit((this.inputField = 0));

    clearInterval(this.timer);
    this.inputField = 0;
  }
}
