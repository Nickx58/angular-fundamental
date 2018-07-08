import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'}
]

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes),
		PassengerDashboardModule
	],
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,
		HomeComponent
	]
})
export class AppModule {}
