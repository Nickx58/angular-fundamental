import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { Baggage } from '../../models/baggage';

@Component({
	selector: 'passenger-form',
	styleUrls: ['./passenger-form.component.scss'],
	templateUrl: './passenger-form.component.html'
})

export class PassengerFormComponent {
	@Input()
	detail: Passenger;

	baggage: Baggage[] = [{
		key: 'none',
		value: 'No baggage'
	},{
		key: 'hand-only',
		value: 'Hand baggage'
	},{
		key: 'hold-only',
		value: 'Hold baggage'
	},{
		key: 'hand-hold',
		value: 'Hand and Hold baggage'
	}];

	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkedInDate = Date.now();
		}
	}
}