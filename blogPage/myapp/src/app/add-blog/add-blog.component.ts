import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {BlogListService} from "../blog-list.service";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBlogComponent implements OnInit {

  constructor(private router :Router,private request:BlogListService) { }

  items:object [];

  title:string;
  category:string;
  desc:string;

  ngOnInit(){
    this.request.loadData()
      .subscribe((data)=>{
        console.log(data);
        this.items=data;
      });

  }

  addWidget(name,category,desc){

    let widget={
      title: name,
      category:category,
      desc: desc,
      like:0,
      deslike:0,
      postedby:JSON.parse(localStorage.getItem("currentUser")).id,
      fav:[]
    }

    this.request.postData(widget)
      .subscribe(data =>{
        this.items.push(widget);
        this.router.navigate(['AllBlog']);
      });

  }




}
