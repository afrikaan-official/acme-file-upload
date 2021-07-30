import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css']
})
export class ViewAreaComponent implements OnInit {
  @Input() tableItems: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }
}
