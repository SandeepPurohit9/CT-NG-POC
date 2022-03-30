import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtboxComponent } from './txtbox.component';

describe('TxtboxComponent', () => {
  let component: TxtboxComponent;
  let fixture: ComponentFixture<TxtboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
