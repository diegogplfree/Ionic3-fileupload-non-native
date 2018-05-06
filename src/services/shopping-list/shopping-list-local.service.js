var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var ShoppingListLocalService = /** @class */ (function () {
    function ShoppingListLocalService(db) {
        this.db = db;
        this.shoppingList = [];
    }
    ShoppingListLocalService.prototype.getShoppingList = function () {
        var _this = this;
        this.shoppingListPromise = this.db.get('shopping-list');
        then(function (val) {
            _this.shoppingList = val;
        });
        return this.shoppingListPromise;
    };
    ShoppingListLocalService.prototype.addItem = function (item) {
        var _this = this;
        this.shoppingListPromise.then(function (val) {
            _this.shoppingList = val;
            _this.shoppingList.push(item);
            return _this.db.set('shopping-list', _this.shoppingList);
        });
        return this.shoppingListPromise;
    };
    ShoppingListLocalService.prototype.editItem = function (item) {
        var _this = this;
        this.shoppingList = [];
        this.shoppingListPromise.then(function (val) {
            val.forEach(function (value) {
                if (value.key == item.key) {
                    value = item;
                }
            });
            _this.shoppingList = val;
        });
        return this.db.set('shopping-list', this.shoppingList);
    };
    ShoppingListLocalService.prototype.removeItem = function (item) {
        this.shoppingList = [];
        this.shoppingListPromise.then(function (val) {
            val.forEach(function (value) {
                if (value.key != item.key) {
                    this.shoppingList.push(value);
                }
            });
        });
        return this.db.set('shopping-list', this.shoppingList);
    };
    ShoppingListLocalService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], ShoppingListLocalService);
    return ShoppingListLocalService;
}());
export { ShoppingListLocalService };
//# sourceMappingURL=shopping-list-local.service.js.map