import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
nameUser :string ;
titlePost :string;
bodyPost :string;
token :any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: UserServiceProvider,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  CrearPost(){
    this.token="4e2efe5f039c041c25e3f333c59dde69";
    let body :any ={"post": {"title": this.titlePost,"body": this.bodyPost}};
    this.http.create('posts',body,this.token)
    .subscribe(
      (data) => { // Success
        this.token = data;
        console.log(this.token.token);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
   CrearUser(){
    let body :any ={"user": {"name": this.nameUser}};
    this.http.create('users',body)
    .subscribe(
      (data) => { // Success
        this.token = data;
        console.log(this.token.token);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: 'Token',
      subTitle: data,
      buttons: ['Ok']
    });
    alert.present();
  }
}
