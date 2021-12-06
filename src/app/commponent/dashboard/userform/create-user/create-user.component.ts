import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  forms!:FormGroup;
  editMode = false;
  id!: number;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  Namepatterns="[a-zA-Z ]*";
mobile="^((\\+91-?)|0)?[0-9]{10}$";


  constructor(private formBuilder:FormBuilder,private service:UsersService,private router:Router, private snackbar:MatSnackBar,private route: ActivatedRoute,) {
    this.forms=this.formBuilder.group({
    
    fullName:['',[Validators.required,Validators.pattern(this.Namepatterns),Validators.minLength(8)]] ,
    email:['',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]] ,
    mobile: [null,[Validators.required,Validators.pattern(this.mobile)],Validators.minLength(10)],
    city: ['',[Validators.required,Validators.pattern(this.Namepatterns)]],
    gender:['',Validators.required],
    department:['',Validators.required],
    regdate:['',[Validators.required]],
    isPermanent:[false,Validators.required]
    })
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this.editMode = params["id"] != null;
      this.initForm();
    });

  }
  initForm(){
    let fullname='';
    let emails="";
    let mobile=null;
    let city='';
    let gender='';
    let deoartemnt='';
    let regate='';
    let isPermanent=false;

    if(this.editMode){
      const users=this.service.getUser(this.id);
      fullname=users.fullName;
      emails=users.email;
      mobile=users.mobile;
      city=users.city;
      gender=users.gender;
      deoartemnt=users.department;
      regate=users.regdate;
      isPermanent=users.isPermanent;
    }
  }
  onClear(){
this.forms.reset();
  }
  onSubmit(){
   const user=new Users(
     this.forms.value['fullName'],
     this.forms.value['email'],
     this.forms.value['mobile'],
     this.forms.value['city'],
     this.forms.value['gender'],
     this.forms.value['department'],
     this.forms.value['regdate'],
     this.forms.value['isPermanent'],
   )
    /*  fullName: this.forms.value.fullName,
      email: this.forms.value.email,
      mobile: this.forms.value.mobile,
      city: this.forms.value.city,
      gender: this.forms.value.gender,
      department: this.forms.value.department,
      regdate:this.forms.value.regdate,
      isPermanent:this.forms.value.isPermanent

    }*/
    

    if(this.editMode){
      this.service.editUsers(this.id,user);
      this.snackbar.open('sucessfully Updated',"",{
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      })
      this.forms.reset();
    }else{
      this.service.createUsers(user);
      this.router.navigate(['/dashboard/user-form'])
      this.snackbar.open('sucessfully registered',"",{
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      });
    }
    console.log(user);
     
  }
}
