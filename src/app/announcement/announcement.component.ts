import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

declare function toggleFunc():any;

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styles: []
})



export class AnnouncementComponent implements OnInit{

  constructor() { 
  }

  ngOnInit() {
    toggleFunc();
  }
}
