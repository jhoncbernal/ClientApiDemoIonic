import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
   // console.log('Hello UserServiceProvider Provider');
  }

  getUsers() {
    return this.http.get('http://localhost:3000/api/v1/users');
  }
  getUser(id) {
    return this.http.get('http://localhost:3000/api/v1/users/'+id);
  }
  getPosts(){
    return this.http.get('http://localhost:3000/api/v1/posts');
  }
  getPost(id){
    return this.http.get('http://localhost:3000/api/v1/posts/'+id);
  }

}
