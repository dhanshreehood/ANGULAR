import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresInfoComponent } from './chores-info.component';

describe('ChoresInfoComponent', () => {
  let component: ChoresInfoComponent;
  let fixture: ComponentFixture<ChoresInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoresInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
