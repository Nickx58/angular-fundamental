import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	template: `
		<div>
			<button (click)="handleName()"> Change Name </button>
			<input
				(ngModelChange)="handleChange($event)" 
				type="text" 
				[ngModel]="name" />
			<input
				type="text"
				[(ngModel)]="name" />
			{{ name }}
		</div>
	`
})

export class AppComponent {
	// property binding
	name: string = 'Nikhil'

	constructor() { }
	// event binding examples
	 handleInput(event: any) {
		this.name = event.target.value;
	}
	// tow way data binding example
	handleChange(value: string) {
		this.name = value;
	}
	handleName() {
		this.name = "Manu"
	}
}