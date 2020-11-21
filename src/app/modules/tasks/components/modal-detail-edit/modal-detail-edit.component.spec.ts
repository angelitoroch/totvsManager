import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailEditComponent } from './modal-detail-edit.component';

describe('ModalDetailEditComponent', () => {
  let component: ModalDetailEditComponent;
  let fixture: ComponentFixture<ModalDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
