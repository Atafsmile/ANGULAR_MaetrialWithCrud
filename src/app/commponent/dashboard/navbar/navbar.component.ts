import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
menu:Menu[]=[];
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.getMenus();
  }
getMenus(){
  this.menuService.getMenu().subscribe(data=>{
    console.log(data);
    this.menu=data;
  })

}
}
