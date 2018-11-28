import { Component } from '@angular/core';
import { WorkbookRequest } from '../workbook-request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AfterViewInit, ViewChild } from '@angular/core';
import { NgbdAlertSelfclosing }  from '../alert-selfclosing';

@Component({
  selector: 'app-workbook-request-form',
  templateUrl: './workbook-request-form.component.html',
  styleUrls: ['./workbook-request-form.component.css']
})


export class WorkbookRequestFormComponent  {

  
  @ViewChild(NgbdAlertSelfclosing)
  private alert: NgbdAlertSelfclosing;

  constructor(private http: HttpClient) {}
  
  url = 'https://m1t3fvf8cd.execute-api.us-east-1.amazonaws.com/default/queue-jap-export';  
  
  title = 'NTD Data Exporter for the Joint Application Package';
  
  model = new WorkbookRequest(2017,'epirf','apreston@rti.org');
  
  submitted = false;
  error = false;

  httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': 'my-auth-token'
	  })
	};

  onSubmit() { 
  	
  	 this.submitted = true;
     var workbook = JSON.stringify(this.model);
	   var req = this.http.post(this.url, workbook, this.httpOptions).subscribe();
     console.log("just submitted again ");

     
	
  }

  
}

