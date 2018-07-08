// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
// component
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerDashboardService } from './passenger-dashboard.service';

const routes: Routes = [
	{ 
		path: 'passengers', 
		children: [
			{ path: '', component: PassengerDashboardComponent },
			{ path: ':id', component: PassengerViewerComponent }
		]
	}
]

@NgModule({
	declarations: [
		PassengerDashboardComponent,
		PassengerViewerComponent,
		PassengerCountComponent,
		PassengerDetailComponent,
		PassengerFormComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		PassengerViewerComponent
	],
	providers: [
		PassengerDashboardService
	]
})

export class PassengerDashboardModule { }