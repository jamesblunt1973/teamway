import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from './models/question.model';

@Injectable({
	providedIn: 'root',
})
export class DataSerivce {
	private baseUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	public async getTest(): Promise<Question[]> {
		const httpReq = this.http.get<Question[]>(`${this.baseUrl}api/test`);
		return await lastValueFrom(httpReq);
	}
}
