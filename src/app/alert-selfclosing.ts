import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'ngbd-alert-selfclosing',
  templateUrl: './alert-selfclosing.html'
})
export class NgbdAlertSelfclosing implements OnInit {
  
  constructor() {
    console.log("starting again...");
  }

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  ngOnInit(): void {
    
    console.log("starting again again..."); 
    
    setTimeout(() => this.staticAlertClosed = true, 8000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }


}