import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGramComponent } from './input-gram.component';

describe('InputGramComponent', () => {
  let component: InputGramComponent;
  let fixture: ComponentFixture<InputGramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
