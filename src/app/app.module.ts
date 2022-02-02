import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizModule } from 'src/app/quiz/quiz.module';
import { OverviewModule } from 'src/app/overview/overview.module';
import { QrCodeModule } from 'src/app/qr-code/qr-code.module';
import { SettingsModule } from 'src/app/settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    QuizModule,
    OverviewModule,
    HttpClientModule,
    QrCodeModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
