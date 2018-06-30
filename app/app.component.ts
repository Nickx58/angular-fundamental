import { Component } from '@angular/core';

interface Passenger {
	id: number,
	fullname: string,
	checkedin: boolean
}

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	template: `
		<div>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					{{ i+1 }} {{ passenger.fullname }}
				</li>
			</ul>
		</div>
	`
})

export class AppComponent {
	passengers: Passenger[] = [{
		id: 1,
		fullname: 'Nikhil',
		checkedin: true
	},{
		id: 2,
		fullname: 'Sharma',
		checkedin: false
	},{
		id: 3,
		fullname: 'Tushar',
		checkedin: false
	},{
		id: 4,
		fullname: 'Raman',
		checkedin: false
	},{
		id: 5,
		fullname: 'Hemu',
		checkedin: false
	}]
}