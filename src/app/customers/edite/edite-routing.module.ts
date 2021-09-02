import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditePage } from './edite.page';

const routes: Routes = [
  {
    path: '',
    component: EditePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditePageRoutingModule {}
