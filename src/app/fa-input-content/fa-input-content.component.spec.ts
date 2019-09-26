import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaInputContentComponent } from './fa-input-content.component';

describe('FaInputContentComponent', () => {
  let component: FaInputContentComponent;
  let fixture: ComponentFixture<FaInputContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaInputContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaInputContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
