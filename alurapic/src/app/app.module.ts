import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { HomeModule } from './home/home.module';
import { VmessageComponent } from './shared/vmessage/vmessage.component';
@NgModule({
  declarations: [
    AppComponent,
    VmessageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
