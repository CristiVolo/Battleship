import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
import { By } from '@angular/platform-browser';

describe('TutorialComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;
  let DebugElement: DebugElement;
  let htmlElement: HTMLElement;


  beforeEach(async ()=>{
    TestBed.configureTestingModule({
      declarations: [TutorialComponent]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(TutorialComponent);
    component=fixture.componentInstance;

    fixture.detectChanges();

    DebugElement=fixture.debugElement.query(By.css('div'));
    htmlElement=DebugElement.nativeElement;
  });

  it('should load the gameplay tab in tutorial page', () => {
    
    const initialValue=component.onGameplay;

    //Act
    component.switchToGameplay();
    fixture.detectChanges();
    const newValue=component.onGameplay;
    
    //Assert
    expect(initialValue).not.toBe(newValue);
  
  })

  it('should load the ship placement tab in tutorial page', () => {
    
    const initialValue1=component.onShipPlacement;

    component.switchToShipPlacement()
    fixture.detectChanges();
    const newValue1=component.onShipPlacement;
    
    expect(initialValue1).not.toBe(newValue1);
  
  })

  it('should load the ships tab in tutorial page', () => {
    
    const initialValue2=component.onShips;

    component.switchToShips()
    fixture.detectChanges();
    const newValue2=component.onShips;
    
    expect(initialValue2).not.toBe(newValue2);
  
  })

  it('should load the grid placement tab in tutorial page', () => {
    
    const initialValue3=true;

    component.switchToGrid()
    //fixture.detectChanges();
    const newValue3=component.onGrid;
    
    expect(initialValue3).toBe(newValue3);
  
  })

  //it('should load the correct tab', ()=>{
    //Assert that the current page displayed is The Grid
    //expect(htmlElement.)
  //})
});
