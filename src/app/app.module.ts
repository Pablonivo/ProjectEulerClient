import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionCardModule } from './components/solution-card-component/solution-card-component.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatGridListModule,
    MatToolbarModule,
    SolutionCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
