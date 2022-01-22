import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from 'src/app/qr-code/qr-code.component';
import { QrCodeScanComponent } from './qr-code-scan/qr-code-scan.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [
    QrCodeComponent,
    QrCodeScanComponent
  ],
  imports: [
    CommonModule,
    ZXingScannerModule
  ]
})
export class QrCodeModule { }
