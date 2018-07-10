// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { HttpServiceComponent } from './http-service.component';

const routes: Routes = [
	{ path: 'service', component: HttpServiceComponent }
]
@NgModule({
	declarations: [
		HttpServiceComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		HttpServiceComponent
	],
	providers: [
	]

})

export class HttpServiceModule { }