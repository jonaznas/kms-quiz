import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  logoUrl: string;

  constructor() {
    this.logoUrl = environment.logoUrl;
  }

  ngOnInit(): void {
  }

}
