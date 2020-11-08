import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhothoUserComponent } from './photho-user.component';

describe('PhothoUserComponent', () => {
  let component: PhothoUserComponent;
  let fixture: ComponentFixture<PhothoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhothoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhothoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
