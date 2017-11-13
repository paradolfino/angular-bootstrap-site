import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  
  activePage = '<app-page-index></app-page-index>';

  constructor() { }
  
  ngOnInit() {
  }

}
