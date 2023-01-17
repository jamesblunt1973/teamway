import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from './models/question.model';

@Injectable({
	providedIn: 'root',
})
export class StateService implements OnDestroy {
	public readonly questions$ = new BehaviorSubject<Question[]>([]);
	public readonly result$ = new BehaviorSubject<string>('');

	ngOnDestroy(): void {
		this.result$.complete();
	}
}
