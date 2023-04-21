import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsPanelComponent } from './hotels-panel.component';

describe('HotelsPanelComponent', () => {
  let component: HotelsPanelComponent;
  let fixture: ComponentFixture<HotelsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
