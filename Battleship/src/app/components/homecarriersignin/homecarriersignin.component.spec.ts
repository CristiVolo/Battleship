import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecarriersigninComponent } from './homecarriersignin.component';

describe('HomecarriersigninComponent', () => {
  let component: HomecarriersigninComponent;
  let fixture: ComponentFixture<HomecarriersigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecarriersigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecarriersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
