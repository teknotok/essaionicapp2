import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
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
  id:number=  0;
  constructor(private customerService: CustomerServiceService,private router :Router) { }

  ngOnInit() {
    let customerRes = this.customerService.getAllCustomer();
    customerRes.snapshotChanges().subscribe(res => {
      this.allcustomers = res;
      this.allcustomers.payload.forEach(item => {
        this.htmlData.push(item.toJSON())
      }
      )
    })
  }
  fetchCustomers() {
    this.customerService.getAllCustomer().valueChanges().subscribe(res => {
      console.log(res);
    })
  }


}
