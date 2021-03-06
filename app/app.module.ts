import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { CoursesModule } from './courses/courses.module';
import { HttpServiceModule } from './http-service/http-service.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: '**', component: NotFoundComponent }
]

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes),
		PassengerDashboardModule,
		CoursesModule,
		HttpServiceModule,
		StockInventoryModule
	],
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent
	]
})
export class AppModule {}
