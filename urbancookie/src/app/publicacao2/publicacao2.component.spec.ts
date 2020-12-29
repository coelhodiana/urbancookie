import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicacao2Component } from './publicacao2.component';

describe('Publicacao2Component', () => {
  let component: Publicacao2Component;
  let fixture: ComponentFixture<Publicacao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Publicacao2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Publicacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
