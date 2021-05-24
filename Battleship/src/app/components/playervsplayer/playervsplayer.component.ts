import { Component, OnInit } from '@angular/core';

document.addEventListener('DOMContentLoaded', () => {
  const playerPlacementGrid = document.querySelector('.grid')
  const shipsGrid = document.querySelector('.drag-ships')
  const ship = document.querySelector('.draggable-ship')
  const carrier = document.querySelector('.carrier-container')
  const battleship = document.querySelector('.battleship-container')
  const cruiser = document.querySelector('.cruiser-container')
  const submarine = document.querySelector('.submarine-container')
  const destroyer = document.querySelector('.destroyer-container')
  const startButton = document.querySelector('#start-btn')
  const rotateButton = document.querySelector('#rotate_button')
  const playerSquares: HTMLDivElement[] = []
  


  const width = 10
  // Create Board
  function createBoard(grid: Element | null, squares: HTMLDivElement[], width: number) {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      grid?.appendChild(square)
      squares.push(square)
    }
  }

  // Create ship selection board
  createBoard(playerPlacementGrid, playerSquares, width)
})

@Component({
  selector: 'app-playervsplayer',
  templateUrl: './playervsplayer.component.html',
  styleUrls: ['./playervsplayer.component.css']
})
export class PlayervsplayerComponent implements OnInit {

  image_carrier:string="/assets/images/Carrier-IMG.png";
  image_battleship:string="/assets/images/Battleship-IMG.png";
  image_cruiser:string="/assets/images/Cruiser-IMG.png";
  image_submarine:string="/assets/images/Submarine-IMG.png";
  image_destroyer:string="/assets/images/Destroyer-IMG.png";

  constructor() { }

  ngOnInit(): void {
  }

}
