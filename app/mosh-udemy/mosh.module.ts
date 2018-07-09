// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { MoshComponent } from './mosh.component';

const routes: Routes = [
	{ path: 'mosh', component: MoshComponent }
]
@NgModule({
	declarations: [
		MoshComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		MoshComponent
	],

})

export class MoshModule { }