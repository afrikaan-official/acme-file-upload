import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FileUploadServiceService} from "../../services/file-upload-service.service";

@Component({
  selector: 'app-upload-area',
  templateUrl: './upload-area.component.html',
  styleUrls: ['./upload-area.component.css']
})

export class UploadAreaComponent implements OnInit {
  loading: boolean = false; 
  files: Array<File> = []; 
  selectedFileType: string = '';
  maxFileSize: number = 0;
  imageMimeTypes: Array<string> = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
  ];
  errorMessages: Array<String> = [];
  uploadedList: Array<any> = [];
  tableItems: Array<Object>=[];

  constructor(private fileUploadService: FileUploadServiceService) { }

  ngOnInit(): void {
  }

  onChange(event:any) {
    this.files = [...event.target.files];
  }

  handleUpload() {
    this.loading = true;
    const fileSizeInBytes = this.maxFileSize * 1048576;

    this.files.map((file: File) => {
      if (this.selectedFileType == 'image/*') {
        if(this.imageMimeTypes.includes(file.type)){
          if (fileSizeInBytes >= file.size) {
            this.fileUploadService.upload(file).subscribe(
             (result:any) => {
               result.map((r:Object)=>{
                 this.tableItems.push(r);
               })                   
              });
          } else{
            this.errorMessages.push(`${file.name} is exceeds file size limit! `);
          }
        } else{
            this.errorMessages.push(`${file.name} is violating file type! `);
        }
      } else if (this.selectedFileType == file.type){ //if selectedFileType is application/pdf then
        if (fileSizeInBytes >= file.size) {
          this.fileUploadService.upload(file).subscribe(
           (result:any) => {
             result.map((r:Object)=>{
               this.tableItems.push(r);
             })                   
            });
        } else{
        this.errorMessages.push(`${file.name} is exceeds file size limit! `);
        }
      } else{
        this.errorMessages.push(`${file.name} is violating file type! `);
      }
    });

    this.loading = false;
  }

  fileTypeAdded(type: string) {
    this.selectedFileType = type;
    this.hideMessages();
  }

  fileSizeAdded(size: number) {
    this.maxFileSize = size;
  }

  hideMessages(){
    this.errorMessages=[];
  }

}
