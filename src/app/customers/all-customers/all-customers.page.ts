import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';
import { Customer } from '../models/cusmodel';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.page.html',
  styleUrls: ['./all-customers.page.scss'],
})
export class AllCustomersPage implements OnInit {
  allcustomers;
  htmlData = [];
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
    let customerRes = this.customerService.getAllCustomer();
    customerRes.snapshotChanges().subscribe(res => {
      this.allcustomers = res;
      this.allcustomers.payload.forEach(item => {
        console.log(item.toJSON())
        this.htmlData.push(item.toJSON())
      }

      )
    })
  }
  fetchCustomers() {
    this.customerService.getAllCustomer().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

}
