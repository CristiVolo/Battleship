import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
//import { FirebaseService } from '../../services/firebase.service';

import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { identifierName, Identifiers } from '@angular/compiler';
//import {onShipPlacement} from './components/tutorial/tutorial.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  logo:string ="assets/images/imageedit_19_3329358286_i.png";
  image_carrier_big:string="/assets/images/Carrier_dim5_image_bfz.png";
  image_carrier_small:string="/assets/images/Carrier_dim5_image.png";

  image_battleship_big:string="/assets/images/Battleship_dim4_z.png";
  image_battleship_small:string="/assets/images/Battleship_dim4_t.png";

  image_cruiser_big:string="/assets/images/Cruiser_dim3_m.png";
  image_cruiser_small:string="/assets/images/Cruiser_dim3_nd.png";

  image_submarine_big:string="/assets/images/Submarine_dim3_.png";
  image_submarine_small:string="/assets/images/Submarine_dim3_wj.png";

  image_destroyer_big:string="/assets/images/Destroyer_dim2_wa.png";
  image_destroyer_small:string="/assets/images/Destroyer_dim2_x.png";

  title = 'Battleship';
  user = "";
  email_field = "";
  
  //title = 'firebase-angular-auth';

  // Check if you are signed in
  isSignedIn = false
  //Check on what tab you are
  onHomeTab = true
  onTutorialTab = false
  onLeaderboardTab = false
  onContactTab = false
  onAboutTab = false
  onPvpGame=false
  resetpass=false

  // Check what ship images will apear
  onCarrier = true
  onBattleship = false
  onCruiser = false
  onSubmarine = false
  onDestroyer = false

  slashNumber:string = "/01"

  // Tab switch methods
  switchToHome() {

    this.onHomeTab = true
    this.onTutorialTab = false
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false

    this.onPvpGame = false
  }

  switchToTutorial() {

    this.onHomeTab = false
    this.onTutorialTab = true
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false

    this.onPvpGame = false
  }

  switchToPvp(){
    this.onHomeTab = false
    this.onTutorialTab = false
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false

    this.onPvpGame = true

  }

  switchToResetPassword(){
    this.resetpass=true;
  }

  @Output() isLogout = new EventEmitter<void>()
  
  constructor(public firebaseService : FirebaseService){}
  SignUpForm:FormGroup | undefined;

  

  ngOnInit(){
    //this.initialAuthStatus = this.authenticationStatus;

    this.SignUpForm=new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.isSignedIn = false
    this.email_field = ""
  }

  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.email_field = email
    }
  }
  //handleLogout(){
  //  this.isSignedIn = falseinvalid
  //  this.email_field = ""
  //}
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  resetPassword(email:string){
    if (!this.email.invalid) {
      this.resetpass=false;
      return firebase.default.auth().sendPasswordResetEmail(email)
      .then(() => console.log("We've sent you a password reset link"))
      .catch(error => console.log(error.message))
    }
    else return
  }

  changeToCarrier(){
    this.onCarrier = true
    this.onBattleship = false
    this.onCruiser = false
    this.onSubmarine = false
    this.onDestroyer = false
    this.slashNumber = "/01"
  }
  changeToBattleship(){
    this.onCarrier = false
    this.onBattleship = true
    this.onCruiser = false
    this.onSubmarine = false
    this.onDestroyer = false
    this.slashNumber = "/02"
  }
  changeToCruiser(){
    this.onCarrier = false
    this.onBattleship = false
    this.onCruiser = true
    this.onSubmarine = false
    this.onDestroyer = false
    this.slashNumber = "/03"
  }
  changeToSubmarine(){
    this.onCarrier = false
    this.onBattleship = false
    this.onCruiser = false
    this.onSubmarine = true
    this.onDestroyer = false
    this.slashNumber = "/04"
  }
  changeToDestroyer(){
    this.onCarrier = false
    this.onBattleship = false
    this.onCruiser = false
    this.onSubmarine = false
    this.onDestroyer = true
    this.slashNumber = "/05"
  }
/*
  tabClick(tab:MatTabChangeEvent){
      if(tab.tab.textLabel=="SIGN UP"){
    
      }else console.log("SIGN IN MARIA");
  }
*/

 }
