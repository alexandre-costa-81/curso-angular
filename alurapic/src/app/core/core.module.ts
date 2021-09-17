import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
