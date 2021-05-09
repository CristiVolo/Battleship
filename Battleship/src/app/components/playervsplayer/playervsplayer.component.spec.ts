import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayervsplayerComponent } from './playervsplayer.component';

describe('PlayervsplayerComponent', () => {
  let component: PlayervsplayerComponent;
  let fixture: ComponentFixture<PlayervsplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayervsplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayervsplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
