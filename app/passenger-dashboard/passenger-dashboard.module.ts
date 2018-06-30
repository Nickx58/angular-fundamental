import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboard } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
	declarations: [
		PassengerDashboard
	],
	imports: [
		CommonModule
	],
	exports: [
		PassengerDashboard
	]
})

export class PassengerDashboardModule { }