import { SignUpPage } from './../sign-up/sign-up';
import { PostsPage } from './../posts/posts';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  constructor(public navCtrl: NavController
      ,private http: UserServiceProvider) {

  }
  ionViewDidLoad(){
    this.showUsers();
  }
  showUsers(){
    this.methodsHttp("index",'users');
  }
  openPageSignUp(){
    this.navCtrl.push(SignUpPage)
  }
  openUser(token){
    this.navCtrl.push(PostsPage,{token})
  }
  methodsHttp(method:string,controller:string){
   eval(this.http[method](controller))
    .subscribe(
      (data) => { 
        this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }
 
}
