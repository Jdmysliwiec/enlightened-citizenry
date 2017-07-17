import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { PropublicaService } from './propublica.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListLegislatorsComponent } from './list-legislators/list-legislators.component';
import { LegislatorsFormComponent } from './legislators-form/legislators-form.component';
import { FilterStatePipe } from './filter-state.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListLegislatorsComponent,
    LegislatorsFormComponent,
    FilterStatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PropublicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
