import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data

  loginForm : FormGroup;
  constructor(private store: Store<any>, private router:Router) {
    this.data = store.select('user')
    this.loginForm = new FormGroup({
      email: new FormControl('chehir@fivepoints.fr'),
      password : new FormControl('12345')
    })
  }

  ngOnInit() {
    this.data.subscribe((data:any)=>{
      console.log(data);
      if(data){
        if(data.message === 'OK'){
          localStorage.setItem('token', data.accessToken)
          this.router.navigateByUrl('/home')
        }
      }
    })
  }
  loginBtn(user){
    console.log(user);
    this.store.dispatch({type:'[User] LOGIN', payload:user.value})
  }
}
