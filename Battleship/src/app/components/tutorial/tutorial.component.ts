import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  // Check on what tutorial section you are
  onGrid = true
  onShips = false
  onShipPlacement = false
  onGameplay = false

  // Tutorial section switch methods
  switchToGrid() {

    this.onGrid = true
    this.onShips = false
    this.onShipPlacement = false
    this.onGameplay = false
  }

  switchToShips() {

    this.onGrid = false
    this.onShips = true
    this.onShipPlacement = false
    this.onGameplay = false
  }

  switchToShipPlacement() {

    this.onGrid = false
    this.onShips = false
    this.onShipPlacement = true
    this.onGameplay = false
  }

  switchToGameplay() {

    this.onGrid = false
    this.onShips = false
    this.onShipPlacement = false
    this.onGameplay = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
