"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
<<<<<<< HEAD
var repository_1 = require("../models/repository");
var product_model_1 = require("../models/product.model");
var supplier_model_1 = require("../models/supplier.model");
var AppComponent = /** @class */ (function () {
    function AppComponent(repo) {
        this.repo = repo;
=======
var AppComponent = (function () {
    function AppComponent() {
        this.title = ' Sameer Angular Developer Still in Learning phase';
        // title = no_such_object;
        //  title = no_such_object;
>>>>>>> 994cbf911b5a8ac7f8bc8e0da821c1d22f1dbad0
    }
<<<<<<< HEAD
=======
    Object.defineProperty(AppComponent.prototype, "product", {
        get: function () {
            return this.repo.product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "products", {
        get: function () {
            return this.repo.products;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createProduct = function () {
        this.repo.createProduct(new product_model_1.Product(0, "X-Ray Scuba Mask", "Watersports", "See what the fish are hiding", 49.99, this.repo.products[0].supplier));
    };
    AppComponent.prototype.createProductAndSupplier = function () {
        var s = new supplier_model_1.Supplier(0, "Rocket Shoe Corp", "Boston", "MA");
        var p = new product_model_1.Product(0, "Rocket-Powered Shoes", "Running", "Set a new record", 100, s);
        this.repo.createProductAndSupplier(p, s);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], AppComponent);
>>>>>>> 3f46948aabd3340840df64fad90398b597640f49
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map