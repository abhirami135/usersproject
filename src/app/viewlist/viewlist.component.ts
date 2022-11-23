import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  userId:any;
  userdetails:any
 
  constructor(private activatedRoute:ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe(result=>{
 // console.log(result['id'])
 this.userId = result['id']
})
this.apiservice.viewuser(this.userId)
.subscribe((result)=>{
console.log(result);
this.userdetails = result

})


  }

}
