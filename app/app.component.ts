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
			<h2> class Binding </h2>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span class="status" [class.checked-in]="passenger.checkedin"> </span>
					{{ i+1 }} {{ passenger.fullname }}
				</li>
			</ul>
			<h2> ngClass Binding </h2>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span class="status" [ngClass]="{'checked-in':passenger.checkedin}"> </span>
					{{ i+1 }} {{ passenger.fullname }}
				</li>
			</ul>
			<h2> style binding </h2>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span class="status" [style.backgroundColor]="(passenger.checkedin ? '#2ecc71' : '#c0392b')"> </span>
					{{ i+1 }} {{ passenger.fullname }}
				</li>
			</ul>
			<h2> ngStyle Binding </h2>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span class="status" [ngStyle]="{backgroundColor:(passenger.checkedin ? '#2ecc71' : '#c0392b')}"> </span>
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
		checkedin: true
	},{
		id: 4,
		fullname: 'Raman',
		checkedin: false
	},{
		id: 5,
		fullname: 'Hemu',
		checkedin: true
	}]
}