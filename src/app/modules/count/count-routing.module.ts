import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './components/count/count.component';

const routes: Routes = [
  {
    path: '',
    component: CountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountRoutingModule {}
