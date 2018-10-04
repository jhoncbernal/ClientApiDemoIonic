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
  constructor(public navCtrl: NavController,private userService: UserServiceProvider) {

  }
  ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(data[0]);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  openUser(id){
    this.navCtrl.push(PostsPage,{id})
    console.log("el id es"+id)
  }
}
