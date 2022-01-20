import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { QuestionDto } from 'src/app/quiz/question-dto';
import { AnswerDto } from 'src/app/quiz/answer-dto';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit, OnChanges {

  @Input() question: QuestionDto;

  @Output() answerSelected = new EventEmitter<AnswerDto>();

  @ViewChild('questionElement') questionElement: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && this.questionElement) {
      this.questionElement.nativeElement.classList.remove('slide-in-right');
      this.questionElement.nativeElement.classList.add('slide-out-left');

      setTimeout(() => {
        this.questionElement.nativeElement.classList.remove('slide-out-left');
        this.questionElement.nativeElement.classList.add('slide-in-right');
      }, 350);
    }
  }

  answer(answer: AnswerDto, e: MouseEvent): void {
    const target = e.target as HTMLButtonElement;

    if (answer.isCorrect) {
      this.questionElement.nativeElement.classList.add('slide-out-left');
      setTimeout(() => this.answerSelected.emit(answer), 350);
    } else {
      target.classList.add('border-2', 'border-red-500', 'shake-horizontal');
      setTimeout(() => target.classList.remove('shake-horizontal'), 800);
    }
  }
}
