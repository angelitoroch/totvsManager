import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

//Modulos de PO UI
import { PoMenuModule } from '@po-ui/ng-components';
import { PhothoUserComponent } from './components/photho-user/photho-user.component';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoDividerModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [AppComponent, PhothoUserComponent],
  imports: [
    PoMenuModule,
    PoButtonModule,
    PoDividerModule,
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
