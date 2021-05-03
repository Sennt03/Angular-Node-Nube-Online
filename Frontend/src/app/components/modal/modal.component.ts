import { Component, Injectable, OnInit, Input } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { FicherosComponent } from '../../components/ficheros/ficheros.component'

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() pathAct: string
  public path
  public method
  public name
  public confirmFile:any
  public confirmImagen:any

  constructor(
    private _cloudService: CloudService,
    private _ficherosComponent: FicherosComponent
  ) { }

  ngOnInit() {
    if(!this.pathAct){
      this.pathAct = ''
    }
  }

  abrir(path, method, file = false, imagen = false){
    this.confirmFile = file
    this.confirmImagen = imagen
    let inicioName = path.lastIndexOf('-')
    if(inicioName == -1){
      this.name = path
    }else{
      inicioName++
      this.name = path.substring(inicioName)
    }

    this.cerrar()
    this.setText(this.name, method, path)
    let check:any = document.getElementById('btn-modal')
    check.checked = true
  }

  cerrar(){
    let check:any = document.getElementById('btn-modal')
    check.checked = false
    this.reseatAllText()
  }

  setText(name, method, path){
    this.reseatAllText()
    let titleModal = ''
    let textoModal = ''

    if(method == 'eliminar'){
      titleModal = 'Eliminar ' + name
      textoModal = `¿Estas seguro de eliminar '${name}'?`
    }else if(method == 'renombrar'){
      titleModal = 'Renombrar ' + name
      textoModal = `Introduce el nuevo nombre de '${name}'`
      document.getElementById('renombrar').style.display = 'block'
      if(this.confirmFile || this.confirmImagen){
        document.getElementById('divRenombrarFile').style.display = 'flex'
        let ext:any = document.getElementById('extRenombrar')
        let inicio:any = name
        inicio = inicio.lastIndexOf('.')
        inicio++
        let nameExt = name.substring(inicio)
        ext.value = nameExt
      }else{
        document.getElementById('divRenombrar').style.display = 'block'
      }
    }else if(method == 'copiar'){
      titleModal = 'Copiar ' + name
      textoModal = `Muevete a la carpeta donde desees copiar '${name}' y pulsa el boton de confirmar`
    }else if(method == 'mover'){
      titleModal = 'Mover ' + name
      textoModal = `Muevete a la carpeta donde desees mover '${name}' y pulsa el boton de confirmar`
    }
    this.setDatos(method, path, this.confirmImagen)
    document.getElementById('header-alerta').innerHTML = titleModal
    document.getElementById('text-modal-body').innerHTML = textoModal
  }

  setDatos(method, path, imagen){
    let data:any = {
      method,
      path
    }
    if(imagen){
     data.imagen = true 
    }
    data = JSON.stringify(data)
    localStorage.setItem('actions', data)
  }
  
  reseatAllText(){
    localStorage.removeItem('actions')
    document.getElementById('renombrar').style.display = 'none'
    document.getElementById('divRenombrarFile').style.display = 'none'
    document.getElementById('divRenombrar').style.display = 'none'
    document.getElementById('divRenombrarFile').style.display = 'none'
    let newName:any = document.getElementById('inputRenombrar')
    newName.value = ''
    let newNameFile:any = document.getElementById('inputRenombrarFile')
    newNameFile.value = ''
    document.getElementById('validNameRenombrar').style.display = 'none'
    document.getElementById('header-alerta').innerHTML = ''
    document.getElementById('text-modal-body').innerHTML = ''
  }

  confirmar(){
    let data:any = localStorage.getItem('actions')
    let confirm = true
    try{
      data = JSON.parse(data)
    }catch(e){
      confirm = false
    }

    if(confirm){
      if(data.method == 'eliminar'){
        this.eliminar(data)
      }else if(data.method == 'renombrar'){
        this.renombrar(data)
      }else if(data.method == 'copiar'){
        data.newPath = this.pathAct
        this.copiar(data)
      }else if(data.method == 'mover'){
        data.newPath = this.pathAct
        this.mover(data)
      }
    }else{
      this.cerrar()
    }

  }

  eliminar(data){
    let imagen = false
    if(data.imagen){
      imagen = true
    }
    this.cerrar()
      this._cloudService.deleteFile(data.path, imagen).subscribe(
        res => {
          this._ficherosComponent.openDir(this.pathAct)
          let response:any = res
          alert(response.message)
        },
        err => {
          let error:any = err
          if(error.error.message){
            alert(error.error.message)
          }else{
            alert('Ocurrio un error al eliminar')
          }
        }
      )
  }

  renombrar(data){
    let imagen = false
    if(data.imagen){
      imagen = true
    }
    let valid:any = document.getElementById('validNameRenombrar')
    let newName:any = document.getElementById('inputRenombrar')
    newName = newName.value
    newName = newName.trim()
    let newNameFile:any = document.getElementById('inputRenombrarFile')
    let ext:any = document.getElementById('extRenombrar')
    ext = ext.value
    newNameFile = newNameFile.value
    newNameFile = newNameFile.trim()
    if(newName || newNameFile){
      let nombre
      if(newName){
        nombre = newName
      }else{
        nombre = newNameFile + '.' + ext
      }
      this.cerrar()
      this._cloudService.rename(data.path, nombre, imagen).subscribe(
        res => {
          this._ficherosComponent.openDir(this.pathAct)
          let response:any = res
          alert(response.message)
        },
        err => {
          if(err.error.message){
            alert(err.error.message)
          }else{
            alert('Ha ocurrido un error')
          }
        }
      )
    }else{
      valid.innerHTML = 'Introdusca el nuevo nombre'
      valid.style.display = 'block'
    }
  }

  copiar(data){
    let imagen = false
    if(data.imagen){
      imagen = true
    }
    this.cerrar()
    this._cloudService.copy(data.path, data.newPath, imagen).subscribe(
      res => {
        this._ficherosComponent.openDir(this.pathAct)
        let response:any = res
        alert(response.message)
      },
      err => {
        if(err.error.message){
          alert(err.error.message)
        }else{
          alert('Ha ocurrido un error al copiar')
        }
      }
    )
    
  }
  
  mover(data){
    let imagen = false
    if(data.imagen){
      imagen = true
    }
    this.cerrar()
    this._cloudService.move(data.path, data.newPath, imagen).subscribe(
      res => {
        this._ficherosComponent.openDir(this.pathAct)
        let response:any = res
        alert(response.message)
      },
      err => {
        if(err.error.message){
          alert(err.error.message)
        }else{
          alert('Ha ocurrido un error al mover')
        }
      }
    )
    
  }

}
