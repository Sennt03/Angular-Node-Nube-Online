import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  public url
  public auth:any

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) { 
    this.url = Global.url
    this.url += 'cloud/'
  }

  loadAuth(){
    let data = this._authService.getDatos()
    this.auth = {
      _id: data.user_id
    }
  }

  openDir(ruta){
    this.loadAuth()
    if(ruta){
      return this._http.post(this.url+'openDir/'+ruta, this.auth)
    }else{
      return this._http.post(this.url+'openDir', this.auth)
    }
  }

  detailFile(path){
    this.loadAuth()
    return this._http.post(this.url+'detailFile/'+path, this.auth)
  }

  downloadFile(path){
    this.loadAuth()
    return this._http.post(this.url+'downloadFile/'+path, this.auth, {responseType: 'blob'})
  }

  createDir(path, name){
    this.loadAuth()
    let data = {
      _id: this.auth._id,
      name
    }
    if(path){
      return this._http.post(this.url+'createDir/'+path, data)
    }else{
      return this._http.post(this.url+'createDir', data)
    }
  }

  uploadFile(path, file){
    this.loadAuth()
    
    let formdata = new FormData()
    formdata.append('file', file)
    formdata.append('_id', this.auth._id)

    if(path){
      return this._http.post(this.url+'uploadFile/'+path, formdata)
    }else{
      return this._http.post(this.url+'uploadFile', formdata)
    }
  }

  detailImage(path){
    this.loadAuth()
    
    return this._http.post(this.url+'getImage/' + path, this.auth)
  }

  deleteFile(path, imagen){
    this.loadAuth()

    if(imagen){
      return this._http.post(this.url+'deleteImage/'+path, this.auth)
    }else{
      return this._http.post(this.url+'delete/'+path, this.auth)
    }
  }

  rename(path, name, imagen){
    this.loadAuth()
    let data = {
      name,
      _id: this.auth._id
    }
    if(imagen){
      return this._http.post(this.url+'renameImage/'+path, data)
    }else{
      return this._http.post(this.url+'rename/'+path, data)
    }
  }

  copy(path, newPath, imagen){
    this.loadAuth()

    let data = {
      newPath,
      _id: this.auth._id
    }
    if(imagen){
      return this._http.post(this.url+'copyImage/'+path, data)
    }else{
      return this._http.post(this.url+'copy/'+path, data)
    }
  }

  move(path, newPath, imagen){
    this.loadAuth()

    let data = {
      newPath,
      _id: this.auth._id
    }
    if(imagen){
      return this._http.post(this.url+'moveImage/'+path, data)
    }else{
      return this._http.post(this.url+'move/'+path, data)
    }
  }

}
