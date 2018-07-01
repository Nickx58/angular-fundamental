import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['./passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count [items]="passengers"></passenger-count>
			<passenger-detail 
				*ngFor="let passenger of passengers" 
				[detail]="passenger"
				(remove)="handleRemove($event)"
				(edit)="handleEdit($event)">
			</passenger-detail>
		</div>
	`
})

export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];
	constructor() { }

	ngOnInit() {
		this.passengers = [{
			id: 1,
			fullname: 'Nikhil',
			checkedIn: true,
			checkedInDate: 1490742000000,
			children: [{ name: 'Tanya', age: 5 }]
		}, {
			id: 2,
			fullname: 'Sharma',
			checkedIn: false
		}, {
			id: 3,
			fullname: 'Tushar',
			checkedIn: true,
			checkedInDate: 1490742000000
		}, {
			id: 4,
			fullname: 'Raman',
			checkedIn: false
		}, {
			id: 5,
			fullname: 'Hemu',
			checkedIn: true,
			checkedInDate: 1490742000000,
			children: [{ name: 'Tanya', age: 5 }]
		}]
	}

	handleRemove(event: Passenger) {
		this.passengers = this.passengers.filter((passenger: Passenger) => {
			return passenger.id !== event.id;
		});
	}

	handleEdit(event: Passenger) {
		this.passengers = this.passengers.map((passenger: Passenger) => {
			if (passenger.id === event.id) {
				passenger = Object.assign({}, passenger, event)
			}
			return passenger;
		});
	}
}