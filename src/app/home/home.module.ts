import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from '../ui/components/search/search.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchComponent
  ]
})
export class HomeModule { }
