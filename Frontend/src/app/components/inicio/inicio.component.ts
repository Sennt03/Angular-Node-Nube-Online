import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public user

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user = this._authService.getUser().subscribe(
      res => {
        this.user = res
      },
      err => {
        if(err.error.message){
          this._authService.logout()
        }else{
          alert('Ha ocurrido un error al iniciar sesion')
          setTimeout(() => {
            this._authService.logout()
          }, 3000)
        }
      }
    )
  }

}
