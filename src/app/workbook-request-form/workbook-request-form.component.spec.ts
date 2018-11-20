import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookRequestFormComponent } from './workbook-request-form.component';

describe('WorkbookRequestFormComponent', () => {
  let component: WorkbookRequestFormComponent;
  let fixture: ComponentFixture<WorkbookRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbookRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
