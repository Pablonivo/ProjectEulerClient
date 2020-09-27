import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentModule } from './components/home/home.component.module';
import { SolutionsComponentModule } from './components/solutions/solutions.component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    HomeComponentModule,
    MatToolbarModule,
    SolutionsComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
