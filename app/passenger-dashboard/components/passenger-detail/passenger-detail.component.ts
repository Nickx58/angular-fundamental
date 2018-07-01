import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
	selector: 'passenger-detail',
	styleUrls: ['./passenger-detail.component.scss'],
	template: `
		<div>
			<span class="status" [class.checked-in]="detail.checkedIn"> </span>
			<div *ngIf="editing">
				<input
					type="text"
					[value]="detail.fullname"
					(input)="onNameChange(name.value)"
					#name/>
			</div>
			<div *ngIf="!editing">
				{{ detail.fullname }}
			</div>
			<div class="date">
				Checked In date:
				{{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checekd in' }}
			</div>
			<div class="children">
				Children: {{ detail.children?.length || 0 }}
			</div>
			<button (click)="toggleEdit()">
				{{ editing ? 'Done' : 'Edit' }}
			</button>
			<button (click)="onRemove()">
				Remove
			</button>
		</div>
	`
})

export class PassengerDetailComponent implements OnChanges {
	@Input()
	detail: Passenger;
	editing: boolean = false;

	@Output()
	remove: EventEmitter<any> = new EventEmitter();

	@Output()
	edit: EventEmitter<any> = new EventEmitter();

	ngOnChanges(changes) {
		if( changes.detail ) {
			this.detail = Object.assign({}, changes.detail.currentValue);
		}
	}

	onNameChange(value: string) {
		this.detail.fullname = value;
	}

	toggleEdit() {
		if (this.editing) {
			this.edit.emit(this.detail);
		}
		this.editing = !this.editing;
	}

	onRemove() {
		this.remove.emit(this.detail);
	}
}