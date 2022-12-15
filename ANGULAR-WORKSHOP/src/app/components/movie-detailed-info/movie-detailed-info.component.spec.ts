import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailedInfoComponent } from './movie-detailed-info.component';

describe('MovieDetailedInfoComponent', () => {
  let component: MovieDetailedInfoComponent;
  let fixture: ComponentFixture<MovieDetailedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
