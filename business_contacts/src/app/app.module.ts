import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAdBzREcnCpRJ6gznsKUMltdieNXvIKTUU",
  authDomain: "businesscontacts-d3d02.firebaseapp.com",
  databaseURL: "https://businesscontacts-d3d02.firebaseio.com",
  storageBucket: "businesscontacts-d3d02.appspot.com",
  messagingSenderId: "929463421315"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
