import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogListService} from "../blog-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-allblog-list',
  templateUrl: './allblog-list.component.html',
  styleUrls: ['./allblog-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllblogListComponent implements OnInit {

  constructor(private router :Router,private request:BlogListService) { }

  items:object [];

  ngOnInit(){
    this.request.loadData()
      .subscribe((data)=>{
        console.log(data);
        this.items=data;
      });

  }

  AddBlog(){
    this.router.navigate(['AddBlog']);
  }

  deleteData(id){
    this.request.deleteData(id)
      .subscribe(data =>{
        this.items.splice(id,1);
        console.log(`data deleted`);


      });
    /*this.router.navigate(['AllBlog']);*/
    window.location.reload();
  }

  @Input()
  ob:Object={};
  @Input()
  newID:number;

  editData(id:number){
    console.log(id);
    this.ob = this.items[id];
    console.log(this.ob);
   // console.log(this.ob["title"]);
    this.router.navigate(['Update']);
    this.newID=id;
    /*this.newTitle=this.ob["title"];
    this.newCategory=this.ob["category"];
    this.newDesc=this.ob["desc"];
    this.newId=id;*/
    localStorage.setItem("EditID",JSON.stringify(id));

  }


  get user(): any {
    let x =  JSON.parse(localStorage.getItem('currentUser'));
    return x.id;
  }

}
