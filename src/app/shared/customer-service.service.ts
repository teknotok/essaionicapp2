import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Customer } from '../customers/models/cusmodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customerList: any;
  customerRef: any;
  time = new Date();
  nowDate = new Date(this.time);
  constructor(private db: AngularFireDatabase) {
    this.customerList = db.list('/customer')
  }

  createCustomer(cus: Customer) {

    return this.customerList.push({
      id: cus.id,
      date: cus.date,
      name: cus.name,
      model: cus.model,
      marka: cus.marka,
      problem: cus.problem,
      imei: cus.imei,
      note: cus.note,
      teslimat: true,
      teslimatTarihi: this.nowDate.toString(),
      avatar: cus.avatar,
    })
  }

  getAllCustomer() {
    return this.db.object('/customer')
  }

  getCustomer(id: string) {
    return this.customerRef = this.db.object('/customer/' + id)
  }

  updateCustomer(id, cus: Customer) {
    return this.customerRef.update({
      id: cus.id,
      date: cus.date,
      name: cus.name,
      model: cus.model,
      marka: cus.marka,
      problem: cus.problem,
      imei: cus.imei,
      note: cus.note,
      teslimat: cus.teslimat,
      teslimatTarihi: cus.teslimatTarihi,
      avatar: cus.avatar,
    })
  }

  deleteCustomer(id: string) {
    this.customerRef = this.db.object('/customer/' + id);
    this.customerRef.remove();
  }

}
