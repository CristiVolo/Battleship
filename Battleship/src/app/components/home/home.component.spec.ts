import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let DebugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async ()=>{
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(HomeComponent);
    component=fixture.componentInstance;

    fixture.detectChanges();

    DebugElement=fixture.debugElement.query(By.css('div'));
    htmlElement=DebugElement.nativeElement;
  });

  
  it('should switch to PvP', () => {
    
    const initialValue=component.onPvpGame1;

    //Act
    component.switchToPvp1();
    fixture.detectChanges();
    const newValue=component.onPvpGame1;
    
    //Assert
    expect(initialValue).not.toBe(newValue);
  
  })
});
