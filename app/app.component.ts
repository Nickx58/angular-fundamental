import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	template: `
		<div>
			<input 
				type="text"
				(input)="handleChange(userName.value)"
				[value]="name"
				#userName /> 
			<div *ngIf="name.length >= 2">
				Searching for....{{ name }}
			</div>
		</div>
	`
})

export class AppComponent {
	// property binding
	name: string = '';

	handleChange(value: string) {
		this.name = value;
	}

}