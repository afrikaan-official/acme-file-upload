import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { FileUploadServiceService } from "./services/file-upload-service.service";
import { LoadingComponent } from './components/loading/loading.component';
import { ViewAreaComponent } from './components/view-area/view-area.component';
import { UploadAreaComponent } from './components/upload-area/upload-area.component';
import { UploadSettingsComponent } from './components/upload-settings/upload-settings.component';

@NgModule({
  declarations: [
    UploadAreaComponent,
    LoadingComponent,
    ViewAreaComponent,
    UploadSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FileUploadServiceService],
  bootstrap: [UploadAreaComponent]
})
export class AppModule { }
