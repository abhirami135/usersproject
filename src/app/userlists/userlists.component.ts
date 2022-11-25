import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.css']
})
export class UserlistsComponent implements OnInit {
//property
userName= "List Of Users"
userlist:any 


  //dependency injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
//apiservice call - to get all restuarunt list

 this.apiService.getUsersList()
 .subscribe((result:any)=>{
  this.userlist = result.users
  console.log(this.userlist);
 })

  }

}
