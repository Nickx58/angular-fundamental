import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	template: `
		<div>
			<button (click)="handleName()"> Change Name </button>
			<input
				(input)="handleInput($event)" 
				type="text" 
				[value]="name" />
			{{ name }}
		</div>
	`
})

export class AppComponent {
	// property binding
	name: string = 'Nikhil'

	constructor() { }
	 handleInput(event: any) {
		this.name = event.target.value;
	}
	handleName() {
		this.name = "Manu"
	}
}