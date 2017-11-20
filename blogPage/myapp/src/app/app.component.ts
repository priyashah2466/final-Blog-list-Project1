import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    ngOnInit(){
      /*localStorage.setItem("currentUser",null);*/
    }


  flag:boolean;
    state():boolean{
      this.flag=true;
    //  console.log("false");
      console.log("is json is null: "+JSON.parse(localStorage.getItem("currentUser"))==null);
      if(JSON.parse(localStorage.getItem("currentUser"))==null)
      {
      //  console.log("trueeeeeeee");
        this.flag=false;
      }
      console.log("hi this is flag"+ this.flag);
      return this.flag;
    }


  logout(){

  //  console.log("hi");
    localStorage.setItem("currentUser",null);
    console.log("hi i m from logout :"+localStorage.getItem("currentUser"));

  }
}

/*
      items:object [];
      ob : any= {} ;
      newTitle:string;
      newCategory:string;
      newDesc:string;
      newId:number;
      like:number;

      ngOnChanges(): void {
        this.request.loadData()
          .subscribe((data)=>{
            console.log(data);
            this.items=data;
          });

      }





      constructor(private request: BlogListService){

      }

      ngOnInit(){

        this.request.loadData()
          .subscribe((data)=>{
            this.items=data;
          })
      }


      addWidget(name,category,desc){

          let widget={
          title: name,
          category:category,
          desc: desc,
            like:0,
            deslike:0



        }

        this.request.postData(widget)
          .subscribe(data =>{
            this.items.push(widget);
          });
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



    /!*  editData(id:number) {
        console.log(id);

        this.ob = this.items["id"];
        console.log(this.items[id]);

        console.log(this.ob);

        console.log(this.ob['title']);
        this.newTitle = this.ob["title"];

        this.newCategory = this.ob["category"];
        this.newDesc = this.ob["desc"];
        this.newId = id;

      }*!/

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


      deleteData(id){
        this.request.deleteData(id)
          .subscribe(data =>{
            this.items.splice(id,1);
            console.log(`data deleted`);

          });
    }



    */

