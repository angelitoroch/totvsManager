import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//Modulos de PO UI
import { PoModule } from '@po-ui/ng-components';
import { PoMenuModule } from '@po-ui/ng-components';
import { PhothoUserComponent } from './components/photho-user/photho-user.component';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoDividerModule } from '@po-ui/ng-components';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PoToolbarModule } from '@po-ui/ng-components';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    PhothoUserComponent,
    NotFoundComponent,
    DefaultComponent,
  ],
  imports: [
    PoToolbarModule,
    PoMenuModule,
    PoButtonModule,
    PoDividerModule,
    PoModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
