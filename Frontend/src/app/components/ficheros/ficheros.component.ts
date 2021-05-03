import { Component, Injectable, OnInit, Input } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'ficheros',
  templateUrl: './ficheros.component.html',
  styleUrls: ['./ficheros.component.css']
})
export class FicherosComponent implements OnInit {

  @Input() username: string

  /* DIR */
  public havePath:any = false
  public path:any = false
  public dirs:any
  public pathAnterior:any

  /* FILE */
  public files:any
  public FileDetail:any
  public haveDetail:any = false

  /* IMAGES */
  public images:any
  public ImageDetail:any
  public haveDetailImage:any = false

  /* COMPROBACION */
  public lleno = true
  public exist:any = true

  constructor(
    private _cloudService: CloudService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe(params => {
      if(params.ruta){
        this.havePath = true
        this.path = params.ruta
      }else{
        this.havePath = false
      }
    })
  }

  ngOnInit() {
    this.openDir(this.path)
    if(this.havePath){
      this.afterPath()
    }

    this.moveAndCopy()
  }

  moveAndCopy(){
    // MODAL ACTIONS
    let data:any = localStorage.getItem('actions')
    let confirm = true
    if(data){
      try{
        data = JSON.parse(data)
      }catch(e){
        confirm = false
      }
      if(confirm){
        if(data.method == 'copiar' || data.method == 'mover'){
          let inicio = data.path.lastIndexOf('-')
          inicio++
          let name = data.path.substring(inicio)
          let titleModal = ''
          let textoModal = ''
          if(data.method == 'copiar'){
            titleModal = 'Copiar ' + name
            textoModal = `Muevete a la carpeta donde desees copiar '${name}' y pulsa el boton de confirmar`
          }else{
            titleModal = 'Mover ' + name
            textoModal = `Muevete a la carpeta donde desees mover '${name}' y pulsa el boton de confirmar`
          }
          document.getElementById('header-alerta').innerHTML = titleModal
          document.getElementById('text-modal-body').innerHTML = textoModal
          let check:any = document.getElementById('btn-modal')
          check.checked = true
        }else{
          localStorage.removeItem('actions')
        }
      }
    }
  }

  afterPath(){
    this._route.params.subscribe(params => {
      let path = params.ruta
      this.openDir(path)
      let inicio = path.lastIndexOf('-')
      if(inicio > -1){
        path = path.substring(0, inicio)
        this.pathAnterior = '/path/'+path
      }else{
        this.pathAnterior = '/'
      }
    })
  }

  openDir(path){
    this.closeDetail()
    if(this.havePath){
      this._router.navigate(['/path/', path])
    }
    this._cloudService.openDir(path).subscribe(
      res => {
        this.exist = true
        this.lleno = true
        let response:any = res
        
        this.dirs = response.content.directories
        this.files = response.content.files
        this.images = response.content.images

        if(this.dirs.length <= 0 && this.files.length <= 0 && this.images.length <= 0){
          this.lleno = false
        }

      },
      err => {
        this.exist = false
      }
    )
  }

  processSize(LLegaSize){
    let size:any = LLegaSize
    size = size.toString()
    size = size.slice(0, -3);
    if(size.length <= 0){
      return 'Menos de 1 KB'
    }else{
      if(size.length >= 4){
        size = size.slice(0, -3);
        return size+'MB'
      }else{
        return size+'KB'
      }
    }
  }

  detailFile(path){
    this._cloudService.detailFile(path).subscribe(
      res => {
        let response:any = res
        this.FileDetail = response.details
        
        this.FileDetail.size = this.processSize(this.FileDetail.size)

        this.haveDetail = true
        this.FileDetail.path = path
      },
      err => {
        console.log(err)
      }
    )
  }

  download(path, filename, ext){
    this._cloudService.downloadFile(path).subscribe(
      res => {
        let blob = new Blob([res])
        let name = filename+'.'+ext
        saveAs(blob, name)
      },
      err => {
        console.log(err)
      }
    )
  }

  closeDetail(){
    this.haveDetail = false
    this.FileDetail = false
  }

  closeDetailImage(){
    this.ImageDetail = false
    this.haveDetailImage = false
  }

  downloadImage(url, name){
    this._cloudService.downloadImage(url, name).subscribe(
      res => {
        let blob = new Blob([res])
        saveAs(blob, name)
      },
      err => {
        if(err.error.message){
          alert(err.error.message)
        }else{
          alert('Ha ocurrido un error inesperado al descargar')
        }
      }
    )
  }

  detailImage(path){
    this._cloudService.detailImage(path).subscribe(
      res => {
        this.ImageDetail = res
        this.ImageDetail.size = this.processSize(this.ImageDetail.size)
        this.haveDetailImage = true
      },
      err => {
        console.log(err)
      }
    )
  }

}
