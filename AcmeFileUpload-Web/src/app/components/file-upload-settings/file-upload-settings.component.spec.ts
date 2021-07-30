import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadSettingsComponent } from './file-upload-settings.component';

describe('FileUploadSettingsComponent', () => {
  let component: FileUploadSettingsComponent;
  let fixture: ComponentFixture<FileUploadSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
