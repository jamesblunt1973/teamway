import { Component, OnInit } from '@angular/core';
import { DataSerivce } from 'src/app/shared/data.service';
import { StateService } from 'src/app/shared/state.service';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
	public loading = false;

	constructor(private data: DataSerivce, private state: StateService) {}

	async ngOnInit(): Promise<void> {
		this.loading = true;
		const questions = await this.data.getTest();
		this.state.questions$.next(questions);
		this.loading = false;
	}
}
