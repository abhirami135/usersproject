import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //property

//dependency injection
  constructor(private api:HttpClient) { }

  //userdefined function

  // to get all users list-api - http://localhost:3000/users

  getUsersList(){
    // use http request get-make api call to http://localhost:3000/users
    //get() - HttpClient class - HttpClientModule library
 return this.api.get('http://localhost:3000/users')
  }
  viewuser(userId:any){
    return this.api.get('http://localhost:3000/users/'+userId)
  }
  
}
