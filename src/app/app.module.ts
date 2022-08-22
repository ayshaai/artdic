import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsPage } from './pages/details/details.page';
import { HomePage } from './pages/home/home.page';
import { DataAccess } from 'src/services/data-access.service';

@NgModule({
  declarations: [AppComponent,
     HomePage,
    DetailsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [ DataAccess,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
