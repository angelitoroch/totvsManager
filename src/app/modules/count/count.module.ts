import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountRoutingModule } from './count-routing.module';
import { CountComponent } from './components/count/count.component';

@NgModule({
  declarations: [CountComponent],
  imports: [CommonModule, CountRoutingModule],
})
export class CountModule {}
