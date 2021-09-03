import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Customer } from '../customers/models/cusmodel';
import { User } from '../auth/user.module';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customerEmail: string = "";
  customerList: any;
  userList: any;
  customerRef: any;
  time = new Date();
  nowDate = new Date(this.time);
  constructor(private db: AngularFireDatabase) {

    this.customerList = db.list('/customer')
    this.userList = db.list('/userList')

  }

  createUser(user: User) {
    return this.userList.push({
      email: user.email,
      password: user.password,
    })
  }

  createCustomer(cus: Customer) {
    return this.customerList.push({
      key: this.customerList.push().getKey(),
      name: cus.name,
      mobile: cus.mobile,
      model: cus.model,
      marka: cus.marka,
      problem: cus.problem,
      imei: cus.imei,
      note: cus.note,
      teslimat: true,
      teslimatTarihi: this.nowDate.toString(),
    })
  }

  getAllCustomer() {
    return this.db.object('/customer')
  }

  getCustomer(key: string) {
    return this.customerRef = this.db.object('/customer/' + key)
  }

  updateCustomer(key, cus: Customer) {
    return this.customerRef.update({
      date: cus.date,
      name: cus.name,
      mobile: cus.mobile,
      model: cus.model,
      marka: cus.marka,
      problem: cus.problem,
      imei: cus.imei,
      note: cus.note,
      teslimat: cus.teslimat,
      teslimatTarihi: cus.teslimatTarihi,
    })
  }

  deleteCustomer(key: string) {
    let test = this.db.list(key)
    test.remove();
    console.log(test)
  }

}
