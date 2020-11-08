import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTasksComponent } from './make-tasks.component';

describe('MakeTasksComponent', () => {
  let component: MakeTasksComponent;
  let fixture: ComponentFixture<MakeTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
