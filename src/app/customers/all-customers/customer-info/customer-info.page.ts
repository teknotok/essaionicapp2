import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';
import { Customer } from '../../models/cusmodel';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.page.html',
  styleUrls: ['./customer-info.page.scss'],
})
export class CustomerInfoPage implements OnInit {
  allCustomerDate;
  htmlData = [];
  lastHtml: Customer = {
    key: '',
    date: '', //
    name: '', //
    mobile: 0, //
    model: '', //
    marka: '', //
    problem: '', //
    imei: '',
    note: '',
    teslimat: false,
    teslimatTarihi: '',
  };
  constructor(private customerServiceInfo: CustomerServiceService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(imei => {
      if (!imei.has('index')) {
        return
      }
      const id = imei.get('index');
      let customerRef = this.customerServiceInfo.getAllCustomer()

      customerRef.snapshotChanges().subscribe(res => {
        this.allCustomerDate = res;
        this.allCustomerDate.payload.forEach(item => {
          this.htmlData.push(item.toJSON());
        })
        this.lastHtml = this.htmlData[id]
      })
    })
  }

  deleteCustomer(key:string) {
    console.log(key)
    if(window.confirm('Are You Sure')){
      this.customerServiceInfo.deleteCustomer(key);
      this.router.navigate(['./all-customers'])
    }
  }

}
