import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatustaskComponent } from './statustask.component';

describe('StatustaskComponent', () => {
  let component: StatustaskComponent;
  let fixture: ComponentFixture<StatustaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatustaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatustaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
