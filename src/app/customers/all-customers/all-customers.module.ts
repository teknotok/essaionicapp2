import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCustomersPageRoutingModule } from './all-customers-routing.module';

import { AllCustomersPage } from './all-customers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCustomersPageRoutingModule
  ],
  declarations: [AllCustomersPage]
})
export class AllCustomersPageModule {}
