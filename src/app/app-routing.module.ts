import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pp1Component } from './pp1/pp1.component';
import { PraticeComponent } from './pratice/pratice.component';
const routes: Routes = [
  {path:'pp1',component:Pp1Component},
  {path:'pratice',component:PraticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
