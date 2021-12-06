import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  UserSelected = new Subject<Users>();
  UserChanged =new Subject<Users[]>();
  
  constructor() { }
  ElementData: Users[] = [
    { 
    fullName: "ANSARI",
    email: "ss@g",
    mobile: 113844254,
    city: "ddddddd",
    gender: "Male",
    department: "Thae",
    regdate: "2021-12-01T18:30:00.000Z",
    isPermanent: true
  },
  { 
    fullName: "ANSARI",
    email: "ss@g",
    mobile: 113844254,
    city: "ddddddd",
    gender: "female",
    department: "science",
    regdate: "2021-12-01T18:30:00.000Z",
    isPermanent: true
  },
  { 
    fullName: "ANSARI",
    email: "ss@g",
    mobile: 113844254,
    city: "thane",
    gender: "Male",
    department: "IT",
    regdate: "2021-12-01T18:30:00.000Z",
    isPermanent: true
  },
  { 
    fullName: "ANSARI",
    email: "ss@g",
    mobile: 113844254,
    city: "ddddddd",
    gender: "Male",
    department: "Thae",
    regdate: "2021-12-01T18:30:00.000Z",
    isPermanent: true
  },
  { 
    fullName: "ANSARI",
    email: "ss@g",
    mobile: 113844254,
    city: "ddddddd",
    gender: "female",
    department: "science",
    regdate: "2021-12-01T18:30:00.000Z",
    isPermanent: true
  },
  { 
    fullName: "ANSARI",
    email: "ss@g",
    mobile: 113844254,
    city: "thane",
    gender: "Male",
    department: "IT",
    regdate: "2021-12-01T18:30:00.000Z",
    isPermanent: true
  },
  
  ];
  
getUsers(){
  return this.ElementData.slice();
}
getUser(id:number){
  return this.ElementData.slice()[id];
}
createUsers(users:Users){
//this.ElementData.unshift(users);
this.ElementData.push(users);
this.UserChanged.next(this.ElementData.slice());

}
deleteUsers(index:number){
  this.ElementData.splice(index,1);
  this.UserChanged.next(this.ElementData.slice());

}
editUsers(inex:number,updata:Users){
   this.ElementData[inex]=updata;
   this.UserChanged.next(this.ElementData.slice());
}


}
