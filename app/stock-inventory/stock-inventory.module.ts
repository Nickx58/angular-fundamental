// app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

const routes: Routes = [
	{ path: 'forms', component: StockInventoryComponent }
]
@NgModule({
	declarations: [
		StockInventoryComponent,
		StockBranchComponent,
		StockProductsComponent,
		StockSelectorComponent
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