import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogListService} from "../../blog-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-compo',
  templateUrl: './update-compo.component.html',
  styleUrls: ['./update-compo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateCompoComponent implements OnInit {

  items:object [];
  newTitle:string;
  newCategory:string;
  newDesc:string;

  constructor(private router :Router,private request:BlogListService){

  }

  newId:number;

    ngOnInit(){

      this.request.loadData()
        .subscribe((data)=>{
          this.items=data;
        })
    }


    updateEmployee(){

    this.newId=JSON.parse(localStorage.getItem("EditID"));
    this.items[this.newId]["title"]=this.newTitle;
    this.items[this.newId]["category"]=this.newCategory;
    this.items[this.newId]["desc"]=this.newDesc;

    let widget = {
      id:this.newId,
      title: this.newTitle,
      category:this.newCategory,
      desc: this.newDesc,
    }

    this.request.updateData(widget)
      .subscribe((data)=>{
        console.log(data);
        this.router.navigate(['AllBlog']);
      })
  }

}
