import { QuestionDto } from 'src/app/quiz/question-dto';

export type QuizDto = {
  id: number;
  roomNumber: number;
  title: string;
  questions: QuestionDto[];
}
