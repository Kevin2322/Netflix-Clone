import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string,password:string){
    //we will call our backend api but as we are not making a real product we will just
    //login user here
    //suppose we have successfully logged in and got a token from the server
    // we will store the token in localstorage
    localStorage.setItem("token",Math.random()+"");
  }
}
