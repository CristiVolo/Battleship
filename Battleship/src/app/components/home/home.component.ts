import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onPvpGame1 = true;
  logged_in = true;

  switchToPvp1(){
    this.onPvpGame1 = false;
  }

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.onPvpGame1=true;
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.logged_in = false;
  }

}
