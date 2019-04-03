import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
//Defining routes
const routes:Routes=[
  {path:"landingpage",component:LandingpageComponent},
  {path:"about",component:AboutComponent}
]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';

import {UserService} from './service/user.service';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
