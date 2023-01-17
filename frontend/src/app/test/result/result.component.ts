import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/shared/state.service';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy {
	private sub?: Subscription;

	public result = '';

	constructor(private state: StateService, private router: Router) {}

	ngOnInit(): void {
		this.sub = this.state.result$.subscribe((value) => (this.result = value));
	}

	reset(): void {
		const questions = this.state.questions$.value.map((a) => ({
			...a,
			selectedAnswer: undefined,
		}));
		this.state.questions$.next([...questions]);
		this.router.navigate(['/start']);
	}

	ngOnDestroy(): void {
		this.sub?.unsubscribe();
	}
}
