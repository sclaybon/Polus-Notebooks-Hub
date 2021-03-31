import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewFiletreeComponent} from './view-filetree.component';

describe('ViewFiletreeComponent', () => {
  let component: ViewFiletreeComponent;
  let fixture: ComponentFixture<ViewFiletreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFiletreeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFiletreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
