import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCustomersPage } from './all-customers.page';

const routes: Routes = [
  {
    path: '',
    component: AllCustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCustomersPageRoutingModule {}
