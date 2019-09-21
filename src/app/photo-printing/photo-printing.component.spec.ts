import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPrintingComponent } from './photo-printing.component';

describe('PhotoPrintingComponent', () => {
  let component: PhotoPrintingComponent;
  let fixture: ComponentFixture<PhotoPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
