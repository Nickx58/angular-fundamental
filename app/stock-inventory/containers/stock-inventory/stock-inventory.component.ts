import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../models/product.interface';

@Component({
	selector: 'stock-inventory',
	styleUrls: ['./stock-inventory.component.scss'],
	template: `
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<stock-branch [parent]="form">
			</stock-branch>

			<stock-selector [parent]="form" [products]="products">
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
	products: Product[] = [
		{ "id": 1, "price": 20, "name": 'Apply Fiz' },
		{ "id": 2, "price": 30, "name": 'COCOA COla' },
		{ "id": 3, "price": 40, "name": 'Pepsi' },
		{ "id": 4, "price": 50, "name": 'Pav Bhaji' },
		{ "id": 5, "price": 60, "name": 'Real Juice' }
	];
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
