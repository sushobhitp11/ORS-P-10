import { Component, OnInit } from '@angular/core';

import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectListComponent  extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super( locator.endpoints.SUBJECT, locator, route);
  }

  public form = {

    error: false, //error 
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null}, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [ ], // search list 
    pageNo: 0
  };

}