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
import { QuizService } from 'src/app/quiz/quiz.service';
import { QuizDto } from 'src/app/quiz/quiz-dto';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit, OnChanges {

  @Input() question: QuestionDto;
  @Input() quiz: QuizDto;

  @Output() answerSelected = new EventEmitter<AnswerDto>();

  @ViewChild('questionElement') questionElement: ElementRef;

  constructor(
    private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && this.questionElement) {
      this.questionElement.nativeElement.classList.remove('slide-in-blurred-top');
      this.questionElement.nativeElement.classList.add('slide-out-blurred-left');

      setTimeout(() => {
        this.questionElement.nativeElement.classList.remove('slide-out-blurred-left');
        this.questionElement.nativeElement.classList.add('slide-in-blurred-top');
      }, 350);
    }
  }

  answer(answer: AnswerDto, e: MouseEvent): void {
    const target = e.target as HTMLButtonElement;

    if (answer.isCorrect) {
      this.quizService.addAnswerToStorage(this.quiz, this.question);
      this.questionElement.nativeElement.classList.add('slide-out-blurred-left');
      setTimeout(() => this.answerSelected.emit(answer), 350);
    } else {
      this.quizService.addFailCount();
      target.classList.add('border-2', 'border-red-500', 'shake-horizontal');
      setTimeout(() => target.classList.remove('shake-horizontal'), 800);
    }
  }
}
