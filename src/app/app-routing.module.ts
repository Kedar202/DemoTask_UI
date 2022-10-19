import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "dashboard",
    loadChildren: () => import("./component/layout/layout.module").then(m => m.LayoutModule)
    // component: CustomerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
