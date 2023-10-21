import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLoaderComponent } from './track-loader.component';

describe('TrackLoaderComponent', () => {
  let component: TrackLoaderComponent;
  let fixture: ComponentFixture<TrackLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackLoaderComponent]
    });
    fixture = TestBed.createComponent(TrackLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
