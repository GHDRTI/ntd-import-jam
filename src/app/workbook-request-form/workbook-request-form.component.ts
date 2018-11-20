import { Component } from '@angular/core';

import { WorkbookRequest }    from '../workbook-request';

@Component({
  selector: 'app-workbook-request-form',
  templateUrl: './workbook-request-form.component.html',
  styleUrls: ['./workbook-request-form.component.css']
})
export class WorkbookRequestFormComponent  {

  title = 'NTD Data Exporter for the Joint Application Package';
  
  model = new WorkbookRequest();

  submitted = false;

  onSubmit() { 
  	this.submitted = true; 
	console.log("i am there");
	
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

