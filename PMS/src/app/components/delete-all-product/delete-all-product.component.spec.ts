import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllProductComponent } from './delete-all-product.component';

describe('DeleteAllProductComponent', () => {
  let component: DeleteAllProductComponent;
  let fixture: ComponentFixture<DeleteAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
