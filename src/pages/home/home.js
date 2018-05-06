var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListLocalService } from './../../services/shopping-list/shopping-list-local.service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, shopping) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.shoppingList = [];
        this.shopping.getShoppingList().then(function (val) {
            _this.shoppingList = val;
        });
    }
    HomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ShoppingListLocalService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map