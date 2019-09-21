import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGiftsComponent } from './photo-gifts.component';

describe('PhotoGiftsComponent', () => {
  let component: PhotoGiftsComponent;
  let fixture: ComponentFixture<PhotoGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
