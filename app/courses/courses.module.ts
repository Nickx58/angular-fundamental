// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service'

const routes: Routes = [
	{ path: 'mosh', component: CoursesComponent }
]
@NgModule({
	declarations: [
		CoursesComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
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