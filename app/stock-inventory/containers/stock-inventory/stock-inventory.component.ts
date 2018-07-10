import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
	selector: 'stock-inventory',
	styleUrls: ['./stock-inventory.component.scss'],
	template: `
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<div formGroupName="store">
				<input formControlName="branch" type="text" placeholder="Branch Code" />
				<input formControlName="code" type="text" placeholder="Manager Code" />
			</div>
			<div class="stock-inventory__buttons">
				<button type="submit" [disabled]="form.invalid"> Order Stock </button>
			</div>
			<pre> {{ form.value | json }} </pre>
		</form>
	`
})

export class StockInventoryComponent {
	form = new FormGroup({
		store: new FormGroup({
			branch: new FormControl('B1B2'),
			code: new FormControl('1234')
		})
	})

	onSubmit() {
		console.log(this.form.value);
	}
}
