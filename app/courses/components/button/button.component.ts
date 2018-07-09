import{ Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'hm-button',
	styleUrls: ['./button.component.scss'],
	template: `
		<button [class.isActive]="isClicked" (click)="changeMe()">
			Change ME
		<button>
	`
})

export class ButtonComponent {
	@Input()
	isClicked: boolean;

	@Output()
	update: EventEmitter<any> = new EventEmitter<any>()

	changeMe() {
		this.update.emit();
	}
}