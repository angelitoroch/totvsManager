import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Modulos para el resume */
import { ResumeRoutingModule } from './resume-routing.module';
import { FormsModule } from '@angular/forms';
import { PoDynamicModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';

//Componentes
import { ResumeComponent } from './components/resume/resume.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { TerminadasComponent } from './components/terminadas/terminadas.component';
import { VencidasComponent } from './components/vencidas/vencidas.component';
import { StatustaskComponent } from './components/statustask/statustask.component';

@NgModule({
  declarations: [
    ResumeComponent,
    PendientesComponent,
    ProcesoComponent,
    TerminadasComponent,
    VencidasComponent,
    StatustaskComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FormsModule,
    PoWidgetModule,
    PoDynamicModule,
    PoButtonModule,
    PoModalModule
  ],
})
export class ResumeModule {}
