import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompoComponent } from './update-compo.component';

describe('UpdateCompoComponent', () => {
  let component: UpdateCompoComponent;
  let fixture: ComponentFixture<UpdateCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
