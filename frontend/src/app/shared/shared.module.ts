import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MaterialsModules } from './materials.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, MaterialsModules],
	exports: [CommonModule, FormsModule, MaterialsModules, LayoutComponent],
})
export class SharedModule {}
