import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  customerForm: FormGroup;
  constructor(
    private customerService: CustomerServiceService,
    private router: Router,
    private fb: FormBuilder
  ) { }



  ngOnInit() {
    this.customerForm = this.fb.group({
      name: [''],
      mobile: [''],
      model: [''],
      marka: [''],
      problem: [''],
      imei: [''],
      note: [''],
      teslimatTarihi: [''],
    })
  }
  fromSubmit() {
    if (!this.customerForm.valid) {
      return false;
    }
    else {
      this.customerService.createCustomer(this.customerForm.value).then(res => {
        console.log(res);
        this.customerForm.reset();
        this.router.navigate(['/all-customers'])
      }).catch(error => { console.log(error) })
    }
  }

}
