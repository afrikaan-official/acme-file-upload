import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSettingsComponent } from './upload-settings.component';

describe('UploadSettingsComponent', () => {
  let component: UploadSettingsComponent;
  let fixture: ComponentFixture<UploadSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
