import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllblogListComponent } from './allblog-list.component';

describe('AllblogListComponent', () => {
  let component: AllblogListComponent;
  let fixture: ComponentFixture<AllblogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllblogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllblogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
