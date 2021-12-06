import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logo="/assets/programmer.png";
loading=false;
form!:FormGroup;
  constructor(private formbuiler:FormBuilder,private snakbar:MatSnackBar,private router:Router) {
    this.form = this.formbuiler.group({  
      userName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*"
      )]],  
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],  
   }); 
     }

  ngOnInit(): void {
  }
  ingresar(){
    

    if(this.form.value.userName == 'Taufique' && this.form.value.password == 'Taufique@555'){

//redierect ai dashoard
console.log(this.form.value.userName,this.form.value.password);
this.fakeloadig();
    }else{
      //error message
this.error();
    }
    this.form.reset();

 

  }
  fakeloadig(){
    this.loading=true;
    setTimeout(()=>{
this.router.navigate(["dashboard"])
    },1500)
  }
  error(){
    this.snakbar.open("Invalid user","",{
      duration:5000,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })
  }
}
