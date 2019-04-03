import { Injectable } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'


@Injectable()


export class UserService {
  userLink: string = 'https://api.github.com/users/';
  userName:string;

constructor(private http:HttpClient){
  console.log("service is now ready!");
  this.userName="KingsMunene"
}
getUserInformation(){
  return this.http.get(this.userLink + this.userName)
}
getUserRepos(){
  return this.http.get(this.userLink + this.userName + "/repos")
}
updateUser(userName:string){
  this.userName=userName;
}
}
