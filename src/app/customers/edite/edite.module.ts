import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditePageRoutingModule } from './edite-routing.module';

import { EditePage } from './edite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditePageRoutingModule
  ],
  declarations: [EditePage]
})
export class EditePageModule {}
