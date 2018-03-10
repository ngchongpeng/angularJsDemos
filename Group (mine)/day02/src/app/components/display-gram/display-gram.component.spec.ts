import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGramComponent } from './display-gram.component';

describe('DisplayGramComponent', () => {
  let component: DisplayGramComponent;
  let fixture: ComponentFixture<DisplayGramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
