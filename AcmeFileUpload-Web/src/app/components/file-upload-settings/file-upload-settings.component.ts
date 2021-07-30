import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload-settings',
  templateUrl: './file-upload-settings.component.html',
  styleUrls: ['./file-upload-settings.component.css']
})
export class FileUploadSettingsComponent implements OnInit {
  @Output() fileTypeEvent = new EventEmitter<string>();
  @Output() fileSizeEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  handleClick(event: any) {
    this.fileTypeEvent.emit(event.target.value);
  }

  handleSize(event: any) {
    this.fileSizeEvent.emit(event.target.value);
  }

}
