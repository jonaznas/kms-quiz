import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { BarcodeFormat } from '@zxing/browser';

@Component({
  selector: 'app-qr-code-scan',
  templateUrl: './qr-code-scan.component.html',
  styleUrls: ['./qr-code-scan.component.scss']
})
export class QrCodeScanComponent implements OnInit {
  allowedFormats: BarcodeFormat[];
  errorMessage: string;
  showCamera: boolean;

  @Output() qrCodeScanned = new EventEmitter<string>();

  @ViewChild('cameraContainer') cameraContainer: ElementRef;
  @ViewChild('errorTemplate') errorTemplate: TemplateRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {
    this.allowedFormats = [BarcodeFormat.QR_CODE];
    this.showCamera = true;
  }

  ngOnInit(): void {
  }

  scanSuccess(url: string) {
    this.qrCodeScanned.emit(url);
  }

  permissionResponse(status: boolean) {
    if (status) {
      this.cameraContainer.nativeElement.classList.remove('hidden');
    } else {
      this.setErrorMessage('Bitte erlaube den Zugriff auf deine Kamera und lade anschließend diese Seite neu.');
    }
  }

  cameraNotFound() {
    this.setErrorMessage('Es wurde keine Kamera gefunden.');
  }

  private setErrorMessage(errorMessage: string) {
    this.showCamera = false;
    this.errorMessage = errorMessage;
    this.viewContainerRef.createEmbeddedView(this.errorTemplate);
  }
}
