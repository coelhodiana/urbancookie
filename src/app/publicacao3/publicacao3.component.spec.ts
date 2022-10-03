import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicacao3Component } from './publicacao3.component';

describe('Publicacao3Component', () => {
  let component: Publicacao3Component;
  let fixture: ComponentFixture<Publicacao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Publicacao3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Publicacao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
