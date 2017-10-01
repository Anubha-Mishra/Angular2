import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrinivasComponent } from './srinivas.component';

describe('SrinivasComponent', () => {
  let component: SrinivasComponent;
  let fixture: ComponentFixture<SrinivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrinivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrinivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
