import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';
import { StateService } from 'src/app/shared/state.service';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
	public currentQuestionId = 0;
	public questions: Question[] = [];

	constructor(private state: StateService, private router: Router) {}

	async ngOnInit(): Promise<void> {
		this.state.questions$.subscribe((questions) => (this.questions = questions));
	}

	get resultReady(): boolean {
		const res = this.questions.every((a) => a.selectedAnswer);
		return res;
	}

	previous(): void {
		this.currentQuestionId--;
	}

	next(): void {
		this.currentQuestionId++;
	}

	showResult(): void {
		const extrovert = this.questions.reduce((total, element) => {
			return (element.selectedAnswer?.ex ?? 0) + total;
		}, 0);
		const introvert = this.questions.reduce((total, element) => {
			return (element.selectedAnswer?.in ?? 0) + total;
		}, 0);
		var result = '';
		if (extrovert > introvert) {
			result = 'Extrovert';
		} else if (extrovert < introvert) {
			result = 'Introvert';
		} else {
			result = 'Inconclusive';
		}
		this.state.result$.next(result);
		this.router.navigate(['start/result']);
	}
}
