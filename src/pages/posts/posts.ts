import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  posts: any;
  prePost :any
  token : string;
  constructor(public navCtrl: NavController,private http: UserServiceProvider, public navParams: NavParams) {
    this.token = navParams.get('token');

  }

  ionViewDidLoad(){
    this.http.index('posts',this.token)
    .subscribe(
      (data) => { // Success
        this.posts = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  openPost(name){
    console.log("el id es"+name)
    this.http.getPost(name)
    .subscribe(
      (data) => { // Success
        //this.users = data;
        console.log("data");
        console.log(data);
       // this.navCtrl.push(PostsPage)
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
