import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/service/users.service';



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ElementData:Users[]=[];
  id!:number;
  user!:Users;
  constructor(private userService:UsersService,private snackBar:MatSnackBar,private router:Router,    private activeRoute: ActivatedRoute,
    ) { }
   
  

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this.user=this.userService.getUser(this.id);
    });
    
this.getUserFromService();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city','gender', 'department','regdate','actions'];
  dataSource!:MatTableDataSource<Users>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getUserFromService(){
    this.ElementData=this.userService.getUsers();
    this.dataSource=new MatTableDataSource(this.ElementData)
  }
  deleteUser(index:number){
console.log(index);
this.userService.deleteUsers(this.id);
this.getUserFromService();
this.snackBar.open('Users Deleted '+index,"",{
  duration:5000,
  horizontalPosition:'center',
  verticalPosition:'bottom'
})
  }
  

}
