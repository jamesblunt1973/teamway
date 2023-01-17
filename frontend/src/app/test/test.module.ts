import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
	{ path: '', component: StartComponent },
	{ path: 'result', component: ResultComponent },
];

@NgModule({
	declarations: [StartComponent, QuestionComponent, ResultComponent],
	imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TestModule {}
