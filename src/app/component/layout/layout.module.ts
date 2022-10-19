import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from 'src/app/pages/customer-form/customer-form.component';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DasboardComponent } from 'src/app/pages/dasboard/dasboard.component';
import { CustomerListComponent } from 'src/app/pages/customer-list/customer-list.component';
import { MultiValueFormComponent } from 'src/app/pages/multi-value-form/multi-value-form.component';

const routes: Routes = [
  {
    path: "",
    component: DasboardComponent
  },
  {
    path: "newTransaction",
    component: CustomerFormComponent
  },
  {
    path: "transactionList",
    component: CustomerListComponent
  },
  {
    path: "multiValueForm",
    component: MultiValueFormComponent
  }
]

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    CustomerFormComponent,
    CustomerListComponent,
    MultiValueFormComponent,
    DasboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class LayoutModule { }
