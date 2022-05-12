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

  startTime: number;
  timeEnd: number;
  score: number;
  fails: number = 0;
  picture: string | null;

  @Input() question: QuestionDto;
  @Input() quiz: QuizDto;

  @Output() answerSelected = new EventEmitter<AnswerDto>();

  @ViewChild('questionElement') questionElement: ElementRef;

  constructor(
    private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
    this.startTime = Date.now();
    this.setPictureIfAvailable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && this.questionElement) {
      this.questionElement.nativeElement.classList.remove('slide-in-blurred-top');
      this.questionElement.nativeElement.classList.add('slide-out-blurred-left');

      setTimeout(() => {
        this.setPictureIfAvailable();
        this.questionElement.nativeElement.classList.remove('slide-out-blurred-left');
        this.questionElement.nativeElement.classList.add('slide-in-blurred-top');
      }, 350);
    }
  }

  answer(answer: AnswerDto, e: MouseEvent): void {
    const target = e.target as HTMLButtonElement;
    this.timeEnd = Date.now();

    if (answer.isCorrect) {
      this.score = this.quizService.calculateSingleScore(this.startTime, this.timeEnd, this.fails)

      this.fails = 0;
      this.startTime = Date.now()

      this.quizService.addAnswerToStorage(this.quiz, this.question, this.score, this.fails);
      this.questionElement.nativeElement.classList.add('slide-out-blurred-left');
      setTimeout(() => this.answerSelected.emit(answer), 350);
    } else {
      this.fails++;
      this.quizService.addFailCount();
      target.classList.add('border-2', 'border-red-500', 'shake-horizontal');
      setTimeout(() => target.classList.remove('shake-horizontal'), 800);
    }
  }

  setPictureIfAvailable() {
    if(this.question.pictureBase64) {
      this.picture = this.question.pictureBase64;
    } else {
      this.picture = null;
    }
  }
}
