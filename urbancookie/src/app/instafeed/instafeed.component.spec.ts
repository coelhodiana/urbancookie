import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafeedComponent } from './instafeed.component';

describe('InstafeedComponent', () => {
  let component: InstafeedComponent;
  let fixture: ComponentFixture<InstafeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstafeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstafeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
