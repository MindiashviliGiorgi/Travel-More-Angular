import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixregisterComponent } from './fixregister.component';

describe('FixregisterComponent', () => {
  let component: FixregisterComponent;
  let fixture: ComponentFixture<FixregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
