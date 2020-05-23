import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepHomeComponent } from './recep-home.component';

describe('RecepHomeComponent', () => {
  let component: RecepHomeComponent;
  let fixture: ComponentFixture<RecepHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
