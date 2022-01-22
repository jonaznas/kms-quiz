import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from 'src/app/qr-code/qr-code.component';
import { WebcamModule } from 'ngx-webcam';
import { QrCodeScanComponent } from './qr-code-scan/qr-code-scan.component';



@NgModule({
  declarations: [
    QrCodeComponent,
    QrCodeScanComponent
  ],
  imports: [
    CommonModule,
    WebcamModule
  ]
})
export class QrCodeModule { }
