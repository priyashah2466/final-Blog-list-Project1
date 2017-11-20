import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BlogListService} from "./blog-list.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AllblogListComponent } from './allblog-list/allblog-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeCComponent } from './home-c/home-c.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { UpdateCComponent } from './update-c/update-c.component';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { UpdateCompoComponent } from './allblog-list/update-compo/update-compo.component';
//myapp/src/app/allblog-list/allblog-list.component.ts

const approutes :Routes =  [

  {path:'login', component:LoginComponent},
  {path:'home', component:NavBarComponent},
  {path:'AllBlog', component:AllblogListComponent},
  {path:'AddBlog', component:AddBlogComponent},
  {path:'Update', component:UpdateCompoComponent},
  {path:'homepage',component:HomeCComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllblogListComponent,
    NavBarComponent,
    HomeCComponent,
    AddBlogComponent,
    UpdateCComponent,
    LoginNavBarComponent,
    UpdateCompoComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)

  ],
  providers: [BlogListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
