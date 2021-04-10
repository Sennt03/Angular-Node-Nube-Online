import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user
  public errMessage
  public err = false
  public cargando = false

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { 
    this.user = new User('', '', '', '')
  }

  ngOnInit() {
    if(this._authService.loggedIn()){
      this._router.navigate(['/'])
    }
  }

  login(){
    this.user.email = this.user.email.trim()
    this.user.password = this.user.password.trim()

    if(this.user.email && this.user.password){
      /* COMPROBAR EMAIL */
      let email = this.user.email
      let confirm = false
      const gmail = '@gmail.com'
      const hotmail = '@hotmail.com'

      for(let i = 0; i < email.length; i++){
        if(email.substring(i) == gmail || email.substring(i) == hotmail){
          confirm = true
        }
      }

      if(confirm){
        this.err = false
        this.cargando = true
        this._authService.login(this.user).subscribe(
          res => {
            let response:any = res
            this._authService.setDatos(response.token, response.user._id)
            this._router.navigate(['/'])
          },
          err => {
            this.cargando = false
            this.err = true
            this.errMessage = err.error.message
          }
        )
      }else{
        this.errMessage = 'Introdusca un email valido'
        this.err = true
      }

    }else{
      this.errMessage = 'Llene todos los campos porfavor'
      this.err = true
    }
  }

}
