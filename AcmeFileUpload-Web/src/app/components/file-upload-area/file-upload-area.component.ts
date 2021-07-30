import { Component, OnInit } from '@angular/core';
import {FileUploadServiceService} from "../../services/file-upload-service.service";

@Component({
  selector: 'file-upload-area',
  templateUrl: './file-upload-area.component.html',
  styleUrls: ['./file-upload-area.component.css']
})

export class FileUploadAreaComponent implements OnInit {
  loading: boolean = false; // Flag variable
  files: any = []; // Variable to store file
  fileType: string = '';
  fileMaxSize: number = 0;
  imagesMimeTypes: Array<string> = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
  ];
  errorMessages: Array<String> = [];
  uploadedList: Array<any> = [];

  constructor(private fileUploadService: FileUploadServiceService) { }

  ngOnInit(): void {
  }

  onChange(event:any) {
    this.files = [...event.target.files];
  }

  onUpload() {
    this.loading = true;

    const sizeIbKb = this.fileMaxSize * 1048576;
    this.files.map((file: File) => {
      if (this.imagesMimeTypes.includes(file.type)) {
        if (sizeIbKb >= file.size) {
          // this.uploadedList.push(file);
          this.fileUploadService.upload(file).subscribe(
            (event: any) => {
            }
          );
        } else {
          this.errorMessages.push(`${file.name} dosya boyutundan dolayı atılamadı.`);
        }
      } else {
        this.errorMessages.push(`${file.name} dosya tipten dolayı atılamadı.`);
      }
    });
    this.loading = false;
  }

  fileTypeAdded(type: string) {
    this.fileType = type;
  }

  fileSizeAdded(size: number) {
    this.fileMaxSize = size;
  }

}
