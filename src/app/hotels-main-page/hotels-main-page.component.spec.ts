import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsMainPageComponent } from './hotels-main-page.component';

describe('HotelsMainPageComponent', () => {
  let component: HotelsMainPageComponent;
  let fixture: ComponentFixture<HotelsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
