import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser={firstname: '', lastname: '', username:'',
  password:''}
  
    constructor(private authorizeService: AuthorizeService ) { }
    registerForm= new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    ngOnInit() {
    }
    onSubmit(){
      console.log(this.registerForm.value)
    }
    
    
    async authenticate(){
      
      await this.authorizeService.signup(this.newUser.username, this.newUser.password)
     
    }
    async loginAuth(){
      await this.authorizeService.login(this.newUser);
    }
  

}
