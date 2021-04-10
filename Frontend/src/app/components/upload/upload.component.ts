import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FicherosComponent } from '../ficheros/ficheros.component';
import { CloudService } from '../../services/cloud.service'; 

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() username: string
  @Input() path: string

  // Carpetas
  public name:any = ''
  public dirMessage:any = false
  public dirOk:any = false
  public dirErr:any = false

  // Archivos
  public files:any = false
  public nameFile:any = false
  public fileMessage:any = false
  public fileOk:any = false
  public fileErr:any = false

  constructor(
    private _cloudService: CloudService,
    private _ficherosComponent: FicherosComponent,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  reseatAll(){
    this.dirOk = false
    this.dirErr = false
    this.dirMessage = false

    this.fileOk = false
    this.fileErr = false
    this.fileMessage = false
  }

  createDir(){
    this.reseatAll()
    this.dirOk = true
    this.dirMessage = 'Creando...'
    
    let name = this.name
    name = name.trim()
    this.name = name
    if(this.name){
      this._cloudService.createDir(this.path, this.name).subscribe(
        res => {
          this.reseatAll()
          this.name = ''
          this.dirOk = true
          this.dirMessage = 'Carpeta creada correctamente'
          this._ficherosComponent.openDir(this.path)
        },
        err => {
          this.reseatAll()
          if(err.error.message){
            this.dirMessage = err.error.message
          }else{
            this.dirMessage = 'Ha ocurrido un error'
          }
          this.dirErr = true
        }
      )
    }else{
      this.reseatAll()
      this.dirMessage = 'Introdusca un nombre'
      this.dirErr = true
    }
  }

  uploadFile(e){
    this.reseatAll()
    this.fileOk = true
    this.fileMessage = 'Cargando...'

    if(this.files){
      this._cloudService.uploadFile(this.path, this.files[0]).subscribe(
        res => {
          let response:any = res
          this.reseatInput()
          this.reseatAll()
          this.fileOk = true
          this.fileMessage = response.message
          this._ficherosComponent.openDir(this.path)
        },
        err => {
          console.log(err)
          if(err.error.message){
            this.reseatAll()
            this.fileMessage = err.error.message
            this.fileErr = true
            this.reseatInput()
          }else{
            alert('Ha ocurrido un error')
            console.log(err)
            this.reseatInput()
          }
        }
      )
    }else{
      this.reseatAll()
      this.fileMessage = 'Seleccione un archivo'
      this.fileErr = true
    }
  }

  selectFile(e){
    this.files = e.target.files
    this.nameFile = this.files[0].name
  }

  reseatInput(){
    const input:any = document.getElementById('archivo')
    this.files = false
    input.value = ''
    this.nameFile = ''
  }

}
