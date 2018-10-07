import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

//const API_ENDPOINT= 'http://localhost:3000/';//API DEVELOPMENT
const API_ENDPOINT= 'https://secure-cove-21467.herokuapp.com/';//API PRODUCTION
const URL_REQ= 'api/v1/';
const API_HEADER= " 'Content-Type': 'application/json','Accept': 'application/json' ";

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  headers : any=  { 'Content-Type': 'application/json','Accept': 'application/json' };
  constructor(public http: HttpClient) {
  }
  index(controller:string,token=""){
    this.authorization(token);
    return this.http.get(API_ENDPOINT+URL_REQ+controller, {
      headers: this.headers
    });
  }
  show(controller:string,id,token=""){
    this.authorization(token);
    return this.http.get(API_ENDPOINT+URL_REQ+controller+'/'+id, {
      headers: this.headers
    });
  }
  create(controller:string,body,token=""){
   this.authorization(token);
    return this.http.post(API_ENDPOINT+URL_REQ+controller, 
            body, 
            {
              headers: this.headers
            });
  }
  delete(controller:string,id,token){
    this.authorization(token);
    return this.http.delete(API_ENDPOINT+URL_REQ+controller+'/'+id, 
    {
      headers: this.headers
    });
  }

  update(controller:string,id,body,token){
    this.authorization(token);
    return this.http.patch(API_ENDPOINT+URL_REQ+controller+'/'+id, 
      body, 
      {
        headers: this.headers
      });
  }
  authorization(token:string){
    if (token!=""){ this.headers.Authorization='Bearer '+token};
  }
  getUsers() {
    return this.http.get(API_ENDPOINT+URL_REQ+'users');
  }
  getUser(id) {
    return this.http.get(API_ENDPOINT+URL_REQ+'users/'+id);
  }
  getPosts(){
    return this.http.get(API_ENDPOINT+URL_REQ+'posts');
  }
  getPost(id){
    return this.http.get(API_ENDPOINT+URL_REQ+'posts/'+id);
  }
  PostUser(data){
    return this.http.post(API_ENDPOINT+URL_REQ+'users', 
  {"user": {"name":
      data}}, 
      {
        headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
      });
  }
}
