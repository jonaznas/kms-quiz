import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  @ViewChild('qrCodePage') qrCodePageElementRef: ElementRef;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async goToQuiz(url: string) {
    if (!url.includes('/quiz/')) {
      console.error('Invalid QR Code URL');
    }

    const quizId = url.split('/quiz/').pop();
    await this.playExitAnimation();
    await this.router.navigate(['/quiz', quizId]);
  }

  async playExitAnimation() {
    this.qrCodePageElementRef.nativeElement.classList.add('slide-out-blurred-bottom');
    await new Promise(resolve => setTimeout(resolve, 450));
  }
}
