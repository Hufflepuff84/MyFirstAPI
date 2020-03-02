import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submit : FormGroup;
  
  userForm = new FormGroup({
    Username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private formBuiler: FormBuilder) { }


  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

}
