import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { By } from '@angular/platform-browser';

describe('FirebaseService', () => {
  let service: FirebaseService;
  let DebugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });
  
});
