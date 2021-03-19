import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PolusNotebooksHubComponent} from './polus-notebooks-hub.component';

describe('PolusNotebooksHubComponent', () => {
  let component: PolusNotebooksHubComponent;
  let fixture: ComponentFixture<PolusNotebooksHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolusNotebooksHubComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolusNotebooksHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
