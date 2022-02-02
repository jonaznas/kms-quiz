import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsDeleteDataConfirmComponent } from './settings-delete-data-confirm/settings-delete-data-confirm.component';
import { IconModule } from 'src/app/layout/icons/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsDeleteDataConfirmComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule
  ]
})
export class SettingsModule { }
