import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataComponent } from './demo-data.component';

describe('DemoDataComponent', () => {
  let component: DemoDataComponent;
  let fixture: ComponentFixture<DemoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
