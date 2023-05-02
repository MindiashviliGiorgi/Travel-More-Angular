import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixloginComponent } from './fixlogin.component';

describe('FixloginComponent', () => {
  let component: FixloginComponent;
  let fixture: ComponentFixture<FixloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
