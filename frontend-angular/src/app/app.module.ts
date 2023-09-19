import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BkService } from './bk.service';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectCustomerByNameComponent } from './select-customer-by-name/select-customer-by-name.component';
import { HomeComponent } from './home/home.component';
import { InsertTransTableComponent } from './insert-trans-table/insert-trans-table.component';


const app_route:Routes =
[
  {'path':'' , component:HomeComponent},
  {'path':'Home' , component:HomeComponent},
  {'path':'customersinfo' , component:CustomerInfoComponent},
  {'path':'selectcustomerbyname' , component:SelectCustomerByNameComponent},
  {'path':'transfermoney' , component:TransferMoneyComponent},
  {'path':'transformationTable' , component:InsertTransTableComponent}
  
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerInfoComponent,
    TransferMoneyComponent,
    SelectCustomerByNameComponent,
    InsertTransTableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(app_route)
  ],
  providers: [BkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
