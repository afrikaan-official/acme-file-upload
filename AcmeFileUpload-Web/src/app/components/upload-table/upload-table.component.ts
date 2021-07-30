import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.css']
})
export class UploadTableComponent implements OnInit {
  @Input() tableItems: Array<any> = []

  constructor() {}

  ngOnInit(): void {
  }

}
