import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPostresComponent } from './mis-postres.component';

describe('MisPostresComponent', () => {
  let component: MisPostresComponent;
  let fixture: ComponentFixture<MisPostresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPostresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
