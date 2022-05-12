import { AnswerDto } from 'src/app/quiz/answer-dto';

export type QuestionDto = {
  id: number;
  question: string | undefined;
  pictureBase64: string;
  answers: AnswerDto[];
};
