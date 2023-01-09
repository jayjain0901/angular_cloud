import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudpracComponent } from './cloudprac/cloudprac.component';

const routes: Routes = [
  {path:'cloudprac', component: CloudpracComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
