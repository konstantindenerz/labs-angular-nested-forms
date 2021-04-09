import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormPageComponent} from './form-page/form-page.component';
import {SubFormComponent} from './form-page/sub-form/sub-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SubSubFormComponent } from './form-page/sub-form/sub-sub-form/sub-sub-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    SubFormComponent,
    SubSubFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
