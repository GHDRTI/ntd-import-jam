import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertCloseable } from './alert-closeable';
import { NgbdAlertSelfclosing } from './alert-selfclosing';
import { WorkbookRequestFormComponent } from './workbook-request-form/workbook-request-form.component';



@NgModule({
  declarations: [
    AppComponent,
    WorkbookRequestFormComponent,
    NgbdAlertCloseable,
    NgbdAlertSelfclosing
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

