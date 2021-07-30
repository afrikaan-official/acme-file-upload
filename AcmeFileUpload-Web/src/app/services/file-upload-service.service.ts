import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http:HttpClient) { }

  upload(file:File):Observable<any> {

    // Create form data
    const formData = new FormData();
  
    formData.append(file.name, file, file.name);

    return this.http.post(environment.apiUrl, formData)
  }
}
