import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { HrComponent } from '../components/hr/hr.component';
import { SalesComponent } from '../components/sales/sales.component';
import { MarketingComponent } from '../components/marketing/marketing.component';


@NgModule({
  declarations: [HrComponent,SalesComponent,MarketingComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
