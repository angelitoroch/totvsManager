import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';

/*Componentes del modulo Calendar */
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CalendarRoutingModule, CommonModule],
})
export class CalendarModule {}
