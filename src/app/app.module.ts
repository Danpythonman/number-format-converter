import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberFormatConverterComponent } from './number-format-converter/number-format-converter.component';

@NgModule({
    declarations: [
        AppComponent,
        NumberFormatConverterComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
