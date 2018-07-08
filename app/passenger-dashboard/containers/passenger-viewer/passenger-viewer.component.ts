import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['./passenger-viewer.component.scss'],
	template: `
		<div>
			<passenger-form 
				[detail]="passenger"
				(update)="onUpdatePassenger($event)">
			</passenger-form>
		</div>
	`
})

export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private passengerService: PassengerDashboardService) { }

	ngOnInit() {
		this.route.params
			.switchMap(( data: Params ) => this.passengerService.getPassenger(data.id))
			.subscribe((data: Passenger) => this.passenger = data);
	}

	onUpdatePassenger(event: Passenger) {
		this.passengerService
			.updatePassengers(event)
			.subscribe((data: Passenger) => {
				this.passenger = Object.assign({}, this.passenger, event);
			});
	}
}