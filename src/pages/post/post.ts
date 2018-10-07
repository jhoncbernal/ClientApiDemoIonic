import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private http: UserServiceProvider,
     private alertCtrl: AlertController) {
    this.post = navParams.get('data');
  }

  ionViewDidLoad() {
  }
  EditPost(){
    let body :any ={"post": {"title": this.post.title,"body": this.post.body}};
    this.http.update('posts',this.post.id,body,this.post.user.token)
    .subscribe(
      (data) => { // Success
        this.post = data;
        this.presentAlert("OK","el Posts "+this.post.title+"se edito correctamente");
      },
      (error) =>{
        this.presentAlert("ERROR",error.message);
        console.error(error);
      }
    )
    this.navCtrl.popToRoot();
  }
  DeletePost(){
    this.http.delete('posts',this.post.id,this.post.user.token)
    .subscribe(
      (data) => { // Success
        this.post = data;
        this.presentAlert("OK","el Posts "+this.post.title+"se elimino correctamente")
      },
      (error) =>{
        this.presentAlert("ERROR",error.message);
        console.error(error);
      }
    )
    this.navCtrl.popToRoot();
  }
  presentAlert(title,data) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: data,
      buttons: ['Ok']
    });
    alert.present();
  }

}
