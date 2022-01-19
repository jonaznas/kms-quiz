import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-quiz-card',
  templateUrl: './overview-quiz-card.component.html',
  styleUrls: ['./overview-quiz-card.component.scss']
})
export class OverviewQuizCardComponent implements OnInit {

  @Input() title: string;

  @Input() roomNumber: number;

  @Input() progress: number;

  constructor() { }

  ngOnInit(): void {
  }

}
