import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnChanges {
	@Input() question!: Question;
	@Output() select = new EventEmitter<Answer>();
	public selectedAnswer!: Answer;

	ngOnChanges(changes: SimpleChanges): void {
		if (this.question && this.question.selectedAnswer) {
			this.selectedAnswer = this.question.selectedAnswer;
		}
	}

	public selectAnswer(): void {
		this.select.emit(this.selectedAnswer);
	}
}
