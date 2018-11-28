import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
}
