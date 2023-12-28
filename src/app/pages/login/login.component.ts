import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    logourl = LOGO_URL;
    bgurl = BG_IMG_URL;

    
email!:string;
password!:string;
loginService=inject(LoginService);
router=inject(Router);

onSubmit(){
  //validate email and password
  if(!this.email || !this.password){
    // return alert("Please enter both Email and Password");
    alert('Provide Email and Password');
    return ;
  }
  //if email and password is correct lets login the 
   this.loginService.login(this.email,this.password);
  //now we are logged in so we will redirect to our browse page
   this.router.navigateByUrl("/browse");
}
    
}
