import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

const materialModules = [MatButtonModule, MatRadioModule];

@NgModule({
	imports: materialModules,
	exports: materialModules,
})
export class MaterialsModules {}
