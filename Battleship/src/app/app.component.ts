import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  // Tab switch methods
  switchToHome() {

    this.onHomeTab = true
    this.onTutorialTab = false
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false
  }

  switchToTutorial() {

    this.onHomeTab = false
    this.onTutorialTab = true
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false
  }

  constructor(public firebaseService : FirebaseService){}
  SignUpForm:FormGroup | undefined;

  ngOnInit(){

    this.SignUpForm=new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
/*
  componentDidMount() {

    let user = this.firebaseService.firebaseAuth.curren;

    let name, email, photoUrl, uid, emailVerified;

    if (await user) {
      name = user.displayName; 
      email = user.email;
      photoUrl = user.photoURL; 
      emailVerified = user.emailVerified;
      uid = user.uid;

      if (!email) {
        email = user.providerData[0].email;
      }

      console.log(name, email, photoUrl, emailVerified, uid);
    }

  }
  get currentUserId(): string {
    return this.isSignedIn ? this.firebaseService.firebaseAuth. : null;
  }
*/
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
  handleLogout(){
    this.isSignedIn = false
    this.email_field = ""
  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  resetPassword(email:string){
    return firebase.default.auth().sendPasswordResetEmail(email)
    .then(() => console.log("We've sent you a password reset link"))
    .catch(error => console.log(error.message))
  }

/*
  tabClick(tab:MatTabChangeEvent){
      if(tab.tab.textLabel=="SIGN UP"){
    
      }else console.log("SIGN IN MARIA");
  }
*/

 }
