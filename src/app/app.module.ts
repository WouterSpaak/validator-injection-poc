import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ValidationModule } from './validation/validation.module';
import { FooValidatorFactory } from './validation/validators/foo.validator';
import { BarValidatorFactory } from './validation/validators/bar.validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ValidationModule.forRoot([
      FooValidatorFactory,
      BarValidatorFactory,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
