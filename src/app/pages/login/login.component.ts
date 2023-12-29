import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../component/header/header.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    
    bgurl = BG_IMG_URL;

    
email!:string;
password!:string;
loginService=inject(LoginService);
router=inject(Router);
toasterService=inject(ToastrService);

ngOnInit(){
  if (this.loginService.isLoggedIn) {
    this.router.navigateByUrl("/browse");
  }
}
onSubmit(){
  //validate email and password
  if(!this.email || !this.password){
    // return alert("Please enter both Email and Password");
    this.toasterService.error('Provide Email and Password');
    return ;
  }
  //if email and password is correct lets login the 
   this.loginService.login(this.email,this.password);
  //now we are logged in so we will redirect to our browse page
   this.toasterService.success("logged in successfully.");
   this.router.navigateByUrl("/browse");
}
    
}
