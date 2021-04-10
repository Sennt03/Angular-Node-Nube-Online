import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  @Input() path: string
  @Input() file:any
  @Input() imagen:any

  constructor(
    private _modalComponent: ModalComponent
  ) { }

  ngOnInit() {
  }

  toggle(){
    this.closeAll()
    let menu = 'menu'+this.path
    document.getElementById(menu).classList.toggle('show')
  }

  closeAll(){
    const uls:any = document.querySelectorAll('.dropdown-container .show')
    if(uls.length >= 1){
      uls.forEach(ul => {
        ul.classList.remove('show')
      })
    }
  }

  eliminar(){
    this.closeAll()
    this._modalComponent.abrir(this.path, 'eliminar', this.file, this.imagen)
  }
  
  renombrar(){
    this.closeAll()
    this._modalComponent.abrir(this.path, 'renombrar', this.file, this.imagen)
  }
  
  copiar(){
    this.closeAll()
    this._modalComponent.abrir(this.path, 'copiar', this.file, this.imagen)
  }
  
  mover(){
    this.closeAll()
    this._modalComponent.abrir(this.path, 'mover', this.file, this.imagen)
  }

}
