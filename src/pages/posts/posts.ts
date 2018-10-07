import { PostPage } from './../post/post';
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
  title:string="Publicaciones";
  token : string;
  constructor(public navCtrl: NavController,private http: UserServiceProvider, public navParams: NavParams) {
    this.token = navParams.get('token');
    this.title = navParams.get('title');
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

  openPost(userToken,postId){
    this.http.show('posts',postId,userToken)
    .subscribe(
      (data) => { // Success
        this.posts[0] = data;
        this.title="Publicacion";
        this.navCtrl.push(PostPage,{data})
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
