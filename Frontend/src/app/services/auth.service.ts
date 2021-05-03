import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { 
    this.url = Global.url
  }

  setDatos(token, user_id){
    localStorage.setItem('token', token)
    localStorage.setItem('id', user_id)
  }

  getDatos(){
    const data = {
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('id')
    }
    return data
  }

  getToken(){
    return localStorage.getItem('token')
  }

  loggedIn(){
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this._router.navigate(['/login'])
  }

  register(user){
    return this._http.post(this.url+'signup', user)
  }

  registerDir(user){
    return this._http.post(this.url+'cloud/register', user)
  }

  login(user){
    return this._http.post(this.url+'signin', user)
  }

  getUser(){
    const user = {
      _id: localStorage.getItem('id')
    }
    return this._http.post(this.url+'getUser', user)
  }
}
