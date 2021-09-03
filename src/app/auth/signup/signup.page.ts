import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  confirm_password: string = "";
  userObject = {};

  constructor(private db: CustomerServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.password !== this.confirm_password) {
      alert('Passwrod Not Match')
    }
    else {
      this.db.createUser({email:this.email, password:this.password});
    }
  }

}
