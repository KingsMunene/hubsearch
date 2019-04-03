import { Component, OnInit } from '@angular/core';
import {UserService } from '../../service/user.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
 user:any;
 repos:any;
 userName:string;

  constructor(private userservice:UserService) { 
   
  }
  findUser(){
    this.userservice.updateUser(this.userName);
    this.userservice.getUserInformation().subscribe(user => {
      console.log(user);
      this.user= user;
    });
    this.userservice.getUserRepos().subscribe(repos =>{
      console.log(repos);
      this.repos=repos;
    })
      
  }
  ngOnInit(){

  }
  }


