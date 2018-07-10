// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service'
import { ButtonComponent } from '../courses/components/button/button.component';
import { TemplateFormComponent } from '../courses/components/template-form/template-form.component';
import { ReactiveFormComponent } from '../courses/components/reactive-form/reactive-form.component';

const routes: Routes = [
	{ path: 'mosh', component: CoursesComponent }
]
@NgModule({
	declarations: [
		CoursesComponent,
		ButtonComponent,
		TemplateFormComponent,
		ReactiveFormComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		CoursesComponent
	],
	providers: [
		CoursesService
	]

})

export class CoursesModule { }