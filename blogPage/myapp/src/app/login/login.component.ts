import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogListService} from "../blog-list.service"
import {Router} from "@angular/router";
import {HttpModule } from "@angular/http";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  items:Object [];
  model :any={};
  ob:Object;

  constructor(private router :Router,private request:BlogListService) {

  }

  ngOnInit() {
    this.request.loadUser()
      .subscribe((data)=>{
        console.log(data);
        this.items=data;
      });
  }

  login(){
    let i=0;
    for(var item in this.items){
      this.ob=this.items[i];

      if(this.ob["userName"]==this.model.username  && this.ob["password"]==this.model.password){
       this.router.navigate(['AllBlog']);
        localStorage.setItem("currentUser",JSON.stringify(this.items[i]));
        console.log("**************"+localStorage.getItem("currentUser"));
        console.log("********success**********");
        break;
      }
      i++;
    }
  }





/*  login(model) {

    this.request.loadData().subscribe((data)=>{

      for (var i = 0; i < data.length; i++) {
        if (model.username == data[i].userName && model.password == data[i].password) {
          console.log("success");
          localStorage.setItem("key",this.model.username);
         // this.router.navigate(['/']);
        } else {
          console.log("failure");
        }
      }
    });
  }*/


}
