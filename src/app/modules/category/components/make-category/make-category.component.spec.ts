import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCategoryComponent } from './make-category.component';

describe('MakeCategoryComponent', () => {
  let component: MakeCategoryComponent;
  let fixture: ComponentFixture<MakeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
