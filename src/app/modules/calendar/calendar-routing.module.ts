import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Componentes del modulo Calendar para el ruteo*/
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
