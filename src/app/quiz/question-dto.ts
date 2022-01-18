import { answerDto } from 'src/app/quiz/answer-dto';

export type questionDto = {
  id: number;
  question: string;
  answers: answerDto[];
};
