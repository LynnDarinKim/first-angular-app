import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }    from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule }     from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ]
  ,
  providers: [],

  // Root Component 지정
  bootstrap: [AppComponent] // Hey Angular, you should bootstrap the whole application with that component being the root component!
})
export class AppModule {
}
