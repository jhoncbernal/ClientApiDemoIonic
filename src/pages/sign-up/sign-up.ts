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
idUser :string ;
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
    let body :any ={"post": {"title": this.titlePost,"body": this.bodyPost}};
    this.http.show('users',this.idUser)
    .subscribe(
      (data) => { // Success
        this.token = data;
        this.http.create('posts',body,this.token.token)
        .subscribe(
          (data) => { // Success
            this.token = data;
            this.titlePost="";
            this.bodyPost="";
            this.idUser="";
            this.presentAlert("ok","la publicación se creo correctamente");
          },
          (error) =>{
            console.error(error);
            this.presentAlert("Error",error);
          }
        )
      },
      (error) =>{
        console.error(error);
        this.presentAlert("Error",error);
      }
    )    
   
  }
   CrearUser(){
    let body :any ={"user": {"name": this.nameUser}};
    this.http.create('users',body)
    .subscribe(
      (data) => { // Success
        this.token = data;
        this.nameUser="";
        this.presentAlert("OK","El usuario "+this.nameUser+" se creo correctamente");
      },
      (error) =>{
        console.error(error);
        this.presentAlert("Error",error);
      }
    )
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
