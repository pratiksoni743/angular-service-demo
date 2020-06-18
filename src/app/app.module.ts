import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ReqresComponent } from './reqres/reqres.component';
import { ReqresService } from './services/reqres.service';

@NgModule({
  declarations: [
    AppComponent,
    ReqresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [ReqresService],
  bootstrap: [ReqresComponent]
})
export class AppModule { }
