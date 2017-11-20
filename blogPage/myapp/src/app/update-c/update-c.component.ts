import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogListService} from "../blog-list.service";

@Component({
  selector: 'app-update-c',
  templateUrl: './update-c.component.html',
  styleUrls: ['./update-c.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateCComponent implements OnInit {

  items:object [];
  ob : any= {} ;
  newTitle:string;
  newCategory:string;
  newDesc:string;
  newId:number;
  like:number;

  constructor(private request: BlogListService){

  }

  ngOnInit(){

    this.request.loadData()
      .subscribe((data)=>{
        this.items=data;
      })
  }

  updateEmployee(){

    console.log(this.items[this.newId]["title"]);
    this.items[this.newId]["title"]=this.newTitle;
    this.items[this.newId]["category"]=this.newCategory;
    this.items[this.newId]["desc"]=this.newDesc;
    //console.log(this.items[this.newId]["title"]);
    let widget = {
      id:this.newId,
      title: this.newTitle,
      category:this.newCategory,
      desc: this.newDesc,
    }
    this.request.updateData(widget)
      .subscribe((data)=>{
        console.log(data);

      })
  }

  editData(id:number){
    console.log(id);

    this.ob = this.items[id];
    console.log(this.ob);
    console.log(this.ob["title"]);
    this.newTitle=this.ob["title"];

    this.newCategory=this.ob["category"];
    this.newDesc=this.ob["desc"];
    this.newId=id;

  }

}
