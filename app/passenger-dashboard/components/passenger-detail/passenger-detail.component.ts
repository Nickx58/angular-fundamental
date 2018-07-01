import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
	selector: 'passenger-detail',
	styleUrls: ['./passenger-detail.component.scss'],
	template: `
		<div>
			<span class="status" [class.checked-in]="detail.checkedIn"> </span>
			{{ detail.fullname }}
			<div class="date">
				Checked In date:
				{{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checekd in' }}
			</div>
			<div class="children">
				Children: {{ detail.children?.length || 0 }}
			</div>
		</div>
	`
})

export class PassengerDetailComponent {
	@Input()
	detail: Passenger;
}