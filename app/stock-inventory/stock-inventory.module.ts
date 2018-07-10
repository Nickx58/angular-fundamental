// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

const routes: Routes = [
	{ path: 'forms', component: StockInventoryComponent }
]
@NgModule({
	declarations: [
		StockInventoryComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		StockInventoryComponent
	],
	providers: [
	]

})

export class StockInventoryModule { }