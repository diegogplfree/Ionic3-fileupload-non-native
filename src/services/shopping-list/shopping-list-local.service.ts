import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Item } from './../../models/item/item.model';

@Injectable()
export class ShoppingListLocalService {

	private shoppingListPromise;
	private shoppingList: Item[] = [];

	constructor(private db: Storage){

	}

	getShoppingList() {
		this.shoppingListPromise = this.db.get('shopping-list');
		this.shoppingListPromise.then((val) => {
	        this.shoppingList = val;
      	});
		return this.shoppingListPromise;
	}

	addItem(item: Item) {		
        this.shoppingList.push(item);
        return this.db.set('shopping-list', this.shoppingList);		
	}

	editItem(item: Item) {					
		this.shoppingList.forEach(function (value) {
		  if (value.key == item.key) {
		  	value = item;
		  }			  
		});		
		return this.db.set('shopping-list', this.shoppingList);
	}

	removeItem(item: Item) {
		this.shoppingList = this.shoppingList.filter(obj => obj !== item);
		return this.db.set('shopping-list', this.shoppingList);
	}
}