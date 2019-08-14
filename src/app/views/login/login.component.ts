import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/User';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false}) form: NgForm;
   users: User;
  constructor(private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
      if (this.auth.isLoggedIn()) {
          this.router.navigate(['/home']);
      }
  }
  onSubmit() {
    const payload = this.form.value;
    this.api.post('https://jsonplaceholder.typicode.com/users', payload as User).subscribe(
        res => {
          console.log(res);
          this.auth.setToken(res.email);
          this.router.navigate(['/home']);
        }
    );
  }
}
