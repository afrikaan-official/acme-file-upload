import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { FileUploadAreaComponent } from "./components/file-upload-area/file-upload-area.component";
import { FileUploadServiceService } from "./services/file-upload-service.service";
import { FileUploadSettingsComponent } from './components/file-upload-settings/file-upload-settings.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UploadTableComponent } from './components/upload-table/upload-table.component';

@NgModule({
  declarations: [
    FileUploadAreaComponent,
    FileUploadSettingsComponent,
    LoadingComponent,
    UploadTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FileUploadServiceService],
  bootstrap: [FileUploadAreaComponent]
})
export class AppModule { }
