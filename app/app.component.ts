import { Component } from '@angular/core';

interface Child {
	name: string,
	age: number
}

interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean,
	checkedInDate?: number,
	children?: Child[]
}

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	template: `
		<div>
			<h2> Airline Passenger </h2>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span class="status" [class.checked-in]="passenger.checkedIn"> </span>
					{{ i+1 }} {{ passenger.fullname }}
					<div class="date">
						Checked In date:
						{{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checekd in' }}
					</div>
					<div class="children">
						Children: {{ passenger.children?.length || 0 }}
					</div>
				</li>
			</ul>
		</div>
	`
})

export class AppComponent {
	passengers: Passenger[] = [{
		id: 1,
		fullname: 'Nikhil',
		checkedIn: true,
		checkedInDate: 1490742000000,
		children: [{name: 'Tanya', age: 5}]
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
		children: [{name: 'Tanya', age: 5}]
	}]
}