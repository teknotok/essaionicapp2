import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    id: '',
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
  constructor(private customerServiceInfo: CustomerServiceService, private activatedRoute: ActivatedRoute) { }

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
        console.log(this.lastHtml = this.htmlData[id])

      })
    })
  }

}
