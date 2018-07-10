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

			<stock-selector 
				[parent]="form"
				[products]="products"
				(added)="onStockAdd($event)">
			</stock-selector>

			<stock-products
				[parent]="form"
				(removed)="onStockRemove($event)">
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
		selector: this.createStock({}),
		stock: new FormArray([
			this.createStock({ product_id: 1, quantity: 10 }),
			this.createStock({ product_id: 3, quantity: 50 }),
		])
	})

	createStock(stock) {
		return new FormGroup({
			product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
			quantity: new FormControl(stock.quantity || 10)
		});
	}

	onStockAdd(stock) {
		const control = this.form.get('stock') as FormArray;
		control.push(this.createStock(stock));
	}

	onStockRemove({group, index}) {
		const control = this.form.get('stock') as FormArray;
		control.removeAt(index);
	}

	onSubmit() {
		console.log(this.form.value);
	}

}
