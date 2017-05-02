// Core
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// Pages
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { MapTab } from '../pages/home/map-tab/map-tab';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
// Components
import { SecurityContextHolder } from '../components/authentication/security-context-holder';
import { LocationTracker } from '../components/location/location-tracker';
import { Configuration } from '../components/configuration';
// Third parties
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '66a0a8f6'
  }
};

@NgModule({
  declarations: [
  MyApp,
  StartPage,
  LoginPage,
  SignupPage,
  HomePage,
  MapTab,
  AboutPage,
  ProfilePage
  ],
  imports: [
  BrowserModule,
  HttpModule,
  IonicModule.forRoot(MyApp),
  CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  StartPage,
  LoginPage,
  SignupPage,
  HomePage,
  MapTab,
  AboutPage,
  ProfilePage
  ],
  providers: [
  LocationTracker,
  SecurityContextHolder,
  Configuration,
  Geolocation,
  BackgroundGeolocation,
  Camera
  ]
})
export class AppModule {}
