import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.css']
})
export class UploadTableComponent implements OnInit {
  items: Array<any> = [
    {
      title: 'ornek.jpg',
      size: '512 MB',
      date: true
    },
    {
      title: 'ornek2.jpg',
      size: '256 MB',
      date: false
    },
    {
      title: 'ornek3.jpg',
      size: '2048 MB',
      date: true
    },
    {
      title: 'ornek4.jpg',
      size: '1024 MB',
      date: false
    }
  ]
  constructor() {}

  ngOnInit(): void {
  }

}
