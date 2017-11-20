import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {forEach} from "@angular/router/src/utils/collection";


const BASE_URL ='http://localhost:3000/items/';
const BASE_URL1 ='http://localhost:3000/Users/';
const header ={headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class BlogListService {


  constructor(private  http:Http) {

  }
  loadData(){

    var x = this.http.get(BASE_URL)
      .map(res =>res.json());


    var y;
    for(var item in x){
    //  console.log(item[0]["title"]);

    }
    return x;

  }

  loadUser(){

    var x = this.http.get(BASE_URL1)
      .map(res =>res.json());


    var y;
    for(var item in x){
      //  console.log(item[0]["title"]);

    }
    return x;

  }

  postData(data){
    return this.http.post(BASE_URL,data,header)
      .map(res => res.json());
  }


  updateData(data){
    return this.http.patch(`${BASE_URL}${data.id}`,data,header)
      .map(res => res.json())
  }

  deleteData(id){
    return this.http.delete(`${BASE_URL}${id}`)
      .map(res => res.json());

  }

}
