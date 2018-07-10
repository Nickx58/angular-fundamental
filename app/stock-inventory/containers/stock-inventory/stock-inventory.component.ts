import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
	selector: 'stock-inventory',
	styleUrls: ['./stock-inventory.component.scss'],
	template: `
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<stock-branch [parent]="form">
			</stock-branch>

			<stock-selector [parent]="form">
			</stock-selector>

			<stock-products [parent]="form">
			</stock-products>

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
		}),
		selector: new FormGroup({
			product_id: new FormControl(''),
			quantity: new FormControl(10)
		}),
		stock: new FormArray([])
	})

	onSubmit() {
		console.log(this.form.value);
	}
}
