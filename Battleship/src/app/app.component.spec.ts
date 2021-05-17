import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let DebugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(AppComponent);
    component=fixture.componentInstance;

    fixture.detectChanges();

    DebugElement=fixture.debugElement.query(By.css('div'));
    htmlElement=DebugElement.nativeElement;
  });
  /*  
  it('should switch you to home', () => {

    const initialValue=component.onPvpGame;
    
    //Act
    //component.switchToHome();
    //fixture.detectChanges();
    //const newValue=component.onHomeTab;
    
    //Assert
    expect(initialValue).not.toBe(true);
  });

  it('true should be true',()=>{
    expect(true).toBe(true);
  });
  
});


  
  it('it should log you out', () => {

    component.logout();
    fixture.detectChanges();
    const newValue=component.isSignedIn;
    
    //Assert
    expect(newValue).toBe(false);
  
  });
  
  it('you should get an error message', () => {

    const email = new FormControl('', [Validators.required, Validators.email]);

    const newValue = component.getErrorMessage();
    
    expect(newValue).toBe('You must enter an email');
  
  });*/
});