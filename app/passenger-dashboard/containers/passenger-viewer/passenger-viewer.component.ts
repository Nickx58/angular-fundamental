import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

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

	constructor(private passengerService: PassengerDashboardService) { }

	ngOnInit() {
		this.passengerService
			.getPassenger(3)
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