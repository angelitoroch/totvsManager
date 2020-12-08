import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Modulos para el resume */
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './components/resume/resume.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { TerminadasComponent } from './components/terminadas/terminadas.component';
import { VencidasComponent } from './components/vencidas/vencidas.component';
import { FormsModule } from '@angular/forms';
import { PoWidgetModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    ResumeComponent,
    PendientesComponent,
    ProcesoComponent,
    TerminadasComponent,
    VencidasComponent,
  ],
  imports: [CommonModule, ResumeRoutingModule, FormsModule, PoWidgetModule],
})
export class ResumeModule {}
