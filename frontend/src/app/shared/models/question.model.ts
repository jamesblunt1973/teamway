import { Answer } from './answer.model';

export interface Question {
	text: string;
	answers: Answer[];
	selectedAnswer?: Answer;
}
