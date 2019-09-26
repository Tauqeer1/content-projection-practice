import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MycardModule } from './mycard/mycard.module';

import { AppComponent } from './app.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { FaInputContentComponent } from './fa-input-content/fa-input-content.component';
import { InputRefDirective } from './inputRef/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    FaInputContentComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MycardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
