import { QuestionDto } from 'src/app/quiz/question-dto';

export type QuizDto = {
  id: number;
  room: string;
  questions: QuestionDto[];
}
