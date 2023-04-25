webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(107);


var bootApplication = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_model__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(repo) {
        this.repo = repo;
    }
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
        this.repo.createProduct(new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* Product */](0, "X-Ray Scuba Mask", "Watersports", "See what the fish are hiding", 49.99, this.repo.products[0].supplier));
    };
    AppComponent.prototype.createProductAndSupplier = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__["a" /* Supplier */](0, "Rocket Shoe Corp", "Boston", "MA");
        var p = new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* Product */](0, "Rocket-Powered Shoes", "Running", "Set a new record", 100, s);
        this.repo.createProductAndSupplier(p, s);
    };
    AppComponent.prototype.replaceProduct = function () {
        var p = this.repo.products[2];
        p.name = "Modified Product";
        p.category = "Modified Category";
        this.repo.replaceProduct(p);
    };
    AppComponent.prototype.replaceSupplier = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__["a" /* Supplier */](1, "Modified Supplier", "New York", "NY");
        this.repo.replaceSupplier(s);
    };
    AppComponent.prototype.updateProduct = function () {
        var changes = new Map();
        changes.set("name", "Sami Kyak Kayak");
        changes.set("supplier", null);
        this.repo.updateProduct(1, changes);
    };
    AppComponent.prototype.deleteProduct = function () {
        this.repo.deleteProduct(1);
    };
    AppComponent.prototype.deleteSupplier = function () {
        this.repo.deleteSupplier(3);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(119),
        styles: [__webpack_require__(118)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_store_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_module__ = __webpack_require__(235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { ProductTableComponent } from "./structure/productTable.component"
//import { CategoryFilterComponent } from "./structure/categoryFilter.component"
//import { ProductDetailComponent } from "./structure/productDetail.component";



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* RoutingConfig */], __WEBPACK_IMPORTED_MODULE_7__store_store_module__["a" /* StoreModule */], __WEBPACK_IMPORTED_MODULE_8__admin_admin_module__["a" /* AdminModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_productSelection_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_cartDetail_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_checkout_checkoutDetails_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_checkout_checkoutPayment_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_checkout_checkoutSummary_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_checkout_orderConfirmation_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_overview_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_productAdmin_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_orderAdmin_component__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });











var routes = [
    {
        path: "admin", component: __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */],
        children: [
            { path: "products", component: __WEBPACK_IMPORTED_MODULE_9__admin_productAdmin_component__["a" /* ProductAdminComponent */] },
            { path: "orders", component: __WEBPACK_IMPORTED_MODULE_10__admin_orderAdmin_component__["a" /* OrderAdminComponent */] },
            { path: "overview", component: __WEBPACK_IMPORTED_MODULE_8__admin_overview_component__["a" /* OverviewComponent */] },
            { path: "", component: __WEBPACK_IMPORTED_MODULE_8__admin_overview_component__["a" /* OverviewComponent */] }
        ]
    },
    { path: "checkout/step1", component: __WEBPACK_IMPORTED_MODULE_3__store_checkout_checkoutDetails_component__["a" /* CheckoutDetailsComponent */] },
    { path: "checkout/step2", component: __WEBPACK_IMPORTED_MODULE_4__store_checkout_checkoutPayment_component__["a" /* CheckoutPaymentComponent */] },
    { path: "checkout/step3", component: __WEBPACK_IMPORTED_MODULE_5__store_checkout_checkoutSummary_component__["a" /* CheckoutSummaryComponent */] },
    { path: "checkout/confirmation", component: __WEBPACK_IMPORTED_MODULE_6__store_checkout_orderConfirmation_component__["a" /* OrderConfirmationComponent */] },
    { path: "checkout", component: __WEBPACK_IMPORTED_MODULE_3__store_checkout_checkoutDetails_component__["a" /* CheckoutDetailsComponent */] },
    { path: "cart", component: __WEBPACK_IMPORTED_MODULE_2__store_cartDetail_component__["a" /* CartDetailComponent */] },
    { path: "store", component: __WEBPACK_IMPORTED_MODULE_1__store_productSelection_component__["a" /* ProductSelectionComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__store_productSelection_component__["a" /* ProductSelectionComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart_model__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartSummaryComponent = (function () {
    function CartSummaryComponent(cart) {
        this.cart = cart;
    }
    Object.defineProperty(CartSummaryComponent.prototype, "itemCount", {
        get: function () {
            return this.cart.itemCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartSummaryComponent.prototype, "totalPrice", {
        get: function () {
            return this.cart.totalPrice;
        },
        enumerable: true,
        configurable: true
    });
    return CartSummaryComponent;
}());
CartSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "store-cartsummary",
        template: __webpack_require__(121)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */]) === "function" && _a || Object])
], CartSummaryComponent);

var _a;
//# sourceMappingURL=cartSummary.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryFilterComponent = (function () {
    function CategoryFilterComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(CategoryFilterComponent.prototype, "categories", {
        get: function () {
            return this.repo.categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryFilterComponent.prototype, "currentCategory", {
        get: function () {
            return this.repo.filter.category;
        },
        enumerable: true,
        configurable: true
    });
    CategoryFilterComponent.prototype.setCurrentCategory = function (newCategory) {
        this.repo.filter.category = newCategory;
        this.repo.getProducts();
    };
    return CategoryFilterComponent;
}());
CategoryFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "store-categoryfilter",
        template: __webpack_require__(122)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], CategoryFilterComponent);

var _a;
//# sourceMappingURL=categoryFilter.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(PaginationComponent.prototype, "pages", {
        get: function () {
            if (this.repo.products != null) {
                return Array(Math.ceil(this.repo.products.length
                    / this.repo.pagination.productsPerPage))
                    .fill(0).map(function (x, i) { return i + 1; });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.changePage = function (newPage) {
        this.repo.pagination.currentPage = newPage;
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "store-pagination",
        template: __webpack_require__(127)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cart_model__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(repo, cart) {
        this.repo = repo;
        this.cart = cart;
    }
    Object.defineProperty(ProductListComponent.prototype, "products", {
        get: function () {
            if (this.repo.products != null && this.repo.products.length > 0) {
                var pageIndex = (this.repo.pagination.currentPage - 1)
                    * this.repo.pagination.productsPerPage;
                return this.repo.products.slice(pageIndex, pageIndex + this.repo.pagination.productsPerPage);
            }
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.addToCart = function (product) {
        this.cart.addProduct(product);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "store-product-list",
        template: __webpack_require__(128)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_cart_model__["a" /* Cart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_cart_model__["a" /* Cart */]) === "function" && _b || Object])
], ProductListComponent);

var _a, _b;
//# sourceMappingURL=productList.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingsComponent = (function () {
    function RatingsComponent() {
    }
    Object.defineProperty(RatingsComponent.prototype, "stars", {
        get: function () {
            if (this.product != null && this.product.ratings != null) {
                var total = this.product.ratings.map(function (r) { return r.stars; })
                    .reduce(function (prev, curr) { return prev + curr; }, 0);
                var count_1 = Math.round(total / this.product.ratings.length);
                return Array(5).fill(false).map(function (value, index) {
                    return index < count_1;
                });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    return RatingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* Product */]) === "function" && _a || Object)
], RatingsComponent.prototype, "product", void 0);
RatingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "store-ratings",
        template: __webpack_require__(130)
    })
], RatingsComponent);

var _a;
//# sourceMappingURL=ratings.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartSummary_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoryFilter_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productList_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ratings_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productSelection_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cartDetail_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkout_checkoutDetails_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__checkout_checkoutPayment_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkout_checkoutSummary_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkout_orderConfirmation_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var StoreModule = (function () {
    function StoreModule() {
    }
    return StoreModule;
}());
StoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__cartSummary_component__["a" /* CartSummaryComponent */], __WEBPACK_IMPORTED_MODULE_3__categoryFilter_component__["a" /* CategoryFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */], __WEBPACK_IMPORTED_MODULE_5__productList_component__["a" /* ProductListComponent */], __WEBPACK_IMPORTED_MODULE_6__ratings_component__["a" /* RatingsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__productSelection_component__["a" /* ProductSelectionComponent */], __WEBPACK_IMPORTED_MODULE_8__cartDetail_component__["a" /* CartDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__checkout_checkoutDetails_component__["a" /* CheckoutDetailsComponent */], __WEBPACK_IMPORTED_MODULE_12__checkout_checkoutPayment_component__["a" /* CheckoutPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__checkout_checkoutSummary_component__["a" /* CheckoutSummaryComponent */], __WEBPACK_IMPORTED_MODULE_14__checkout_orderConfirmation_component__["a" /* OrderConfirmationComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_7__productSelection_component__["a" /* ProductSelectionComponent */]]
    })
], StoreModule);

//# sourceMappingURL=store.module.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Pagination; });
var Filter = (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.category = this.search = null;
        this.related = false;
    };
    return Filter;
}());

var Pagination = (function () {
    function Pagination() {
        this.productsPerPage = 4;
        this.currentPage = 1;
    }
    return Pagination;
}());

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_model__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */], __WEBPACK_IMPORTED_MODULE_2__cart_model__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_3__order_model__["a" /* Order */]]
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Supplier; });
var Supplier = (function () {
    function Supplier(supplierId, name, city, state) {
        this.supplierId = supplierId;
        this.name = name;
        this.city = city;
        this.state = state;
    }
    return Supplier;
}());

//# sourceMappingURL=supplier.model.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports = "\r\n        <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var productsUrl = "/api/products";
var suppliersUrl = "/api/suppliers";
var ordersUrl = "/api/orders";
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__["a" /* Filter */]();
        this.paginationObject = new __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__["b" /* Pagination */]();
        this.suppliers = [];
        this.categories = [];
        this.orders = [];
        //this.filter.category = "soccer";
        this.filter.related = true;
        this.getProducts();
    }
    Repository.prototype.getProduct = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, productsUrl + "/" + id)
            .subscribe(function (response) {
            _this.product = response;
        });
    };
    Repository.prototype.getProducts = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        var url = productsUrl + "?related=" + this.filter.related;
        if (this.filter.category) {
            url += "&category=" + this.filter.category;
            /*url += "&category=" + "soccer";*/
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
            /*url += "&search=" + "soccer";*/
        }
        url += "&metadata=true";
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, url)
            .subscribe(function (response) {
            _this.products = response.data;
            _this.categories = response.categories;
            _this.pagination.currentPage = 1;
        });
    };
    Repository.prototype.getSuppliers = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, suppliersUrl)
            .subscribe(function (response) { return _this.suppliers = response; });
    };
    Repository.prototype.createProduct = function (prod) {
        var _this = this;
        var data = {
            name: prod.name, category: prod.category,
            description: prod.description, price: prod.price,
            supplier: prod.supplier ? prod.supplier.supplierId : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, productsUrl, data)
            .subscribe(function (response) {
            prod.productId = response;
            _this.products.push(prod);
        });
    };
    Repository.prototype.createProductAndSupplier = function (prod, supp) {
        var _this = this;
        var data = {
            name: supp.name, city: supp.city, state: supp.state
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, suppliersUrl, data)
            .subscribe(function (response) {
            supp.supplierId = response;
            prod.supplier = supp;
            _this.suppliers.push(supp);
            if (prod != null) {
                _this.createProduct(prod);
            }
        });
    };
    Repository.prototype.replaceProduct = function (prod) {
        var _this = this;
        var data = {
            name: prod.name, category: prod.category,
            description: prod.description, price: prod.price,
            supplier: prod.supplier ? prod.supplier.supplierId : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, productsUrl + "/" + prod.productId, data)
            .subscribe(function (response) { return _this.getProducts(); });
    };
    Repository.prototype.replaceSupplier = function (supp) {
        var _this = this;
        var data = {
            name: supp.name, city: supp.city, state: supp.state
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, suppliersUrl + "/" + supp.supplierId, data)
            .subscribe(function (response) { return _this.getProducts(); });
    };
    Repository.prototype.updateProduct = function (id, changes) {
        var _this = this;
        var patch = [];
        changes.forEach(function (value, key) {
            return patch.push({ op: "replace", path: key, value: value });
        });
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Patch, productsUrl + "/" + id, patch)
            .subscribe(function (response) { return _this.getProducts(); });
    };
    Repository.prototype.deleteProduct = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete, productsUrl + "/" + id)
            .subscribe(function (response) { return _this.getProducts(); });
    };
    Repository.prototype.deleteSupplier = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete, suppliersUrl + "/" + id)
            .subscribe(function (response) {
            _this.getProducts();
            _this.getSuppliers();
        });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        });
    };
    Repository.prototype.getOrders = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, ordersUrl)
            .subscribe(function (data) { return _this.orders = data; });
    };
    Repository.prototype.createOrder = function (order) {
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, ordersUrl, {
            name: order.name,
            address: order.address,
            payment: order.payment,
            products: order.products
        }).subscribe(function (data) {
            order.orderConfirmation = data;
            order.cart.clear();
            order.clear();
        });
    };
    Repository.prototype.shipOrder = function (order) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, ordersUrl + "/" + order.orderId)
            .subscribe(function (r) { return _this.getOrders(); });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "pagination", {
        get: function () {
            return this.paginationObject;
        },
        enumerable: true,
        configurable: true
    });
    Repository.prototype.storeSessionData = function (dataType, data) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, "/api/session/" + dataType, data)
            .subscribe(function (response) { });
    };
    Repository.prototype.getSessionData = function (dataType) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, "/api/session/" + dataType);
    };
    return Repository;
}());
Repository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-inverse \">\r\n    <a class=\"navbar-brand text-white\">SPORTS STORE</a>\r\n</div>\r\n<div class=\"m-1\">\r\n    <h2 class=\"text-center\">Your Cart</h2>\r\n    <table class=\"table table-bordered table-striped p-1\">\r\n        <thead>\r\n            <tr>\r\n                <th>Quantity</th>\r\n                <th>Product</th>\r\n                <th class=\"text-right\">Price</th>\r\n                <th class=\"text-right\">Subtotal</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"cart.selections.length == 0\">\r\n                <td colspan=\"4\" class=\"text-xs-center\">\r\n                    Your cart is empty\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let sel of cart.selections\">\r\n                <td>\r\n                    <input type=\"number\" class=\"form-control-sm\"\r\n                           style=\"width:5em\" [(ngModel)]=\"sel.quantity\" />\r\n                </td>\r\n                <td>{{sel.name}}</td>\r\n                <td class=\"text-right\">\r\n                    {{sel.price | currency:\"USD\":true:\"2.2-2\"}}\r\n                </td>\r\n                <td class=\"text-right\">\r\n                    {{(sel.quantity * sel.price) | currency:\"USD\":true:\"2.2-2\" }}\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <button class=\"btn btn-sm btn-danger\"\r\n                            (click)=\"cart.updateQuantity(sel.productId, 0)\">\r\n                        Remove\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n        <tfoot>\r\n            <tr>\r\n                <td colspan=\"3\" class=\"text-right\">Total:</td>\r\n                <td class=\"text-right\">\r\n                    {{cart.totalPrice | currency:\"USD\":true:\"2.2-2\"}}\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n    </table>\r\n</div>\r\n<div class=\"text-center\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/store\">Continue Shopping</button>\r\n    <button class=\"btn btn-secondary\" routerLink=\"/checkout\"\r\n            [disabled]=\"cart.selections.length == 0\">\r\n        Checkout\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right p-1\">\r\n    <small *ngIf=\"itemCount > 0; else empty\">\r\n        ({{ itemCount }} item(s) {{ totalPrice | currency:\"USD\":true }})\r\n    </small>\r\n    <button class=\"btn btn-sm ml-1\"\r\n            [disabled]=\"itemCount == 0\"\r\n            routerLink=\"/cart\">\r\n        <i class=\"fa fa-shopping-cart\"></i>\r\n    </button>\r\n</div>\r\n<ng-template #empty>\r\n    <small class=\"text-muted\">\r\n        (cart is empty)\r\n    </small>\r\n</ng-template>"

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-1\">\r\n    <button class=\"btn btn-outline-primary btn-block\"\r\n            (click)=\"setCurrentCategory(null)\">\r\n        All Categories\r\n    </button>\r\n    <button *ngFor=\"let category of categories\"\r\n            class=\"btn btn-outline-primary btn-block\"\r\n            [class.active]=\"currentCategory == category\"\r\n            (click)=\"setCurrentCategory(category)\">\r\n        {{category}}\r\n    </button>\r\n</div>"

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-inverse \">\r\n    <a class=\"navbar-brand text-white\">SPORTS STORE</a>\r\n</div>\r\n<h2 class=\"text-center mt-1\">Step 1: Your Details</h2>\r\n<form novalidate #detailsForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input #name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n               [(ngModel)]=\"order.name\" required />\r\n        <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n            Please enter your name\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <input #address=\"ngModel\" name=\"street\" class=\"form-control\"\r\n               [(ngModel)]=\"order.address\" required />\r\n        <div *ngIf=\"address.invalid\" class=\"text-danger\">\r\n            Please enter your address\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center pt-2\">\r\n        <button class=\"btn btn-outline-primary\" routerLink=\"/cart\">Back</button>\r\n        <button class=\"btn btn-danger\" [disabled]=\"detailsForm.invalid\"\r\n                routerLink=\"/checkout/step2\">\r\n            Next\r\n        </button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-inverse \">\r\n    <a class=\"navbar-brand text-white\">SPORTS STORE</a>\r\n</div>\r\n<h2 class=\"text-center mt-1\">Step 2: Payment</h2>\r\n<form novalidate #paymentForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n        <label>Card Number</label>\r\n        <input #cardNumber=\"ngModel\" name=\"cardNumber\" class=\"form-control\"\r\n               [(ngModel)]=\"order.payment.cardNumber\" required />\r\n        <div *ngIf=\"cardNumber.invalid\" class=\"text-danger\">\r\n            Please enter your card number\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Card Expiry</label>\r\n        <input #cardExpiry=\"ngModel\" name=\"cardExpiry\" class=\"form-control\"\r\n               [(ngModel)]=\"order.payment.cardExpiry\" required />\r\n        <div *ngIf=\"cardExpiry.invalid\" class=\"text-danger\">\r\n            Please enter your card expiry\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Security Code</label>\r\n        <input #cardCode=\"ngModel\" name=\"cardCode\" class=\"form-control\"\r\n               [(ngModel)]=\"order.payment.cardSecurityCode\" required />\r\n        <div *ngIf=\"cardCode.invalid\" class=\"text-danger\">\r\n            Please enter your security code\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center pt-2\">\r\n        <button class=\"btn btn-outline-primary\" routerLink=\"/checkout/step1\">\r\n            Back\r\n        </button>\r\n        <button class=\"btn btn-danger\" [disabled]=\"paymentForm.invalid\"\r\n                routerLink=\"/checkout/step3\">\r\n            Next\r\n        </button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Summary</h2>\r\n<div class=\"container\">\r\n    <table class=\"table m-2\">\r\n        <tr><th>Name</th><td>{{order.name}}</td></tr>\r\n        <tr><th>Address</th><td>{{order.address}}</td></tr>\r\n        <tr><th>Products</th><td>{{order.cart.itemCount}}</td></tr>\r\n        <tr>\r\n            <th>Total Price</th>\r\n            <td>{{order.cart.totalPrice | currency:USD:true }}</td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"text-center pt-2\">\r\n        <button class=\"btn btn-outline-primary\" routerLink=\"/checkout/step2\">\r\n            Back\r\n        </button>\r\n        <button class=\"btn btn-danger\" (click)=\"submitOrder()\">\r\n            Place Order\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Order Confirmation</h2>\r\n<div class=\"container\">\r\n    <table *ngIf=\"order.orderConfirmation; else nodata\" class=\"table m-2\">\r\n        <tr><th>Order</th><td>{{order.orderConfirmation.orderId}}</td></tr>\r\n        <tr><th>Price</th><td>{{order.orderConfirmation.amount}}</td></tr>\r\n        <tr><th>Payment Code</th><td>{{order.orderConfirmation.authCode}}</td></tr>\r\n    </table>\r\n    <div class=\"text-center\">\r\n        <button class=\"btn btn-primary\" routerLink=\"/\">Done</button>\r\n    </div>\r\n    <ng-template #nodata>\r\n        <h3 class=\"text-center\">Submitting Order...</h3>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pages.length > 1\" class=\"text-right my-2\">\r\n    <button *ngFor=\"let page of pages\"\r\n            class=\"btn btn-outline-primary mx-0.1\"\r\n            [class.active]=\"current == page\"\r\n            (click)=\"changePage(page)\">\r\n        {{page}}\r\n    </button>\r\n</div>"

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"products?.length > 0; else nodata\">\r\n    <div *ngFor=\"let product of products\" class=\"card card-outline-primary m-1\">\r\n        <div class=\"card-header\">\r\n\r\n            <span class=\"h4\">\r\n                {{product.name}}\r\n                <store-ratings [product]=\"product\"></store-ratings>\r\n            </span>\r\n\r\n            <span class=\"float-right badge badge-pill badge-primary\">\r\n                {{product.price | currency:\"USD\":true }}\r\n            </span>\r\n        </div>\r\n        <div class=\"card-block\">\r\n            <span class=\"card-text p-a-1\">{{product.description}}</span>\r\n            <button class=\"float-right btn btn-sm btn-outline-danger\"\r\n                    (click)=\"addToCart(product)\">\r\n                Add to Cart\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #nodata>\r\n    <h4 class=\"m-1\">Waiting for data...</h4>\r\n</ng-template>"

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-inverse \">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <a class=\"navbar-brand text-white\">\r\n                SPORTS STORE\r\n            </a>\r\n        </div>\r\n        <div class=\"col text-white mr-1\">\r\n            <store-cartsummary></store-cartsummary>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-3\">\r\n        <store-categoryfilter></store-categoryfilter>\r\n    </div>\r\n    <div class=\"col\">\r\n        <store-product-list></store-product-list>\r\n        <store-pagination></store-pagination>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = "<span class=\"h6 ml-1\">\r\n    <i *ngFor=\"let s of stars\"\r\n       [class]=\"s ? 'fa fa-star' : 'fa fa-star-o'\"\r\n       [style.color]=\"s ? 'goldenrod' : 'gray'\">\r\n    </i>\r\n</span>"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* unused harmony export ProductSelection */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cart = (function () {
    function Cart(repo) {
        var _this = this;
        this.repo = repo;
        this.selections = [];
        this.itemCount = 0;
        this.totalPrice = 0;
        repo.getSessionData("cart").subscribe(function (cartData) {
            if (cartData != null) {
                cartData.map(function (item) { return new ProductSelection(_this, item.productId, item.name, item.price, item.quantity); })
                    .forEach(function (item) { return _this.selections.push(item); });
                _this.update(false);
            }
        });
    }
    Cart.prototype.addProduct = function (product) {
        var selection = this.selections
            .find(function (ps) { return ps.productId == product.productId; });
        if (selection) {
            selection.quantity++;
        }
        else {
            this.selections.push(new ProductSelection(this, product.productId, product.name, product.price, 1));
        }
        this.update();
    };
    Cart.prototype.updateQuantity = function (productId, quantity) {
        if (quantity > 0) {
            var selection = this.selections.find(function (ps) { return ps.productId == productId; });
            if (selection) {
                selection.quantity = quantity;
            }
        }
        else {
            var index = this.selections.findIndex(function (ps) { return ps.productId == productId; });
            if (index != -1) {
                this.selections.splice(index, 1);
            }
            this.update();
        }
    };
    Cart.prototype.clear = function () {
        this.selections = [];
        this.update();
    };
    Cart.prototype.update = function (storeData) {
        if (storeData === void 0) { storeData = true; }
        this.itemCount = this.selections.map(function (ps) { return ps.quantity; })
            .reduce(function (prev, curr) { return prev + curr; }, 0);
        this.totalPrice = this.selections.map(function (ps) { return ps.price * ps.quantity; })
            .reduce(function (prev, curr) { return prev + curr; }, 0);
        if (storeData) {
            this.repo.storeSessionData("cart", this.selections.map(function (s) {
                return {
                    productId: s.productId, name: s.name,
                    price: s.price, quantity: s.quantity
                };
            }));
        }
    };
    return Cart;
}());
Cart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]) === "function" && _a || Object])
], Cart);

var ProductSelection = (function () {
    function ProductSelection(cart, productId, name, price, quantityValue) {
        this.cart = cart;
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantityValue = quantityValue;
    }
    Object.defineProperty(ProductSelection.prototype, "quantity", {
        get: function () {
            return this.quantityValue;
        },
        set: function (newQuantity) {
            this.quantityValue = newQuantity;
            this.cart.update();
        },
        enumerable: true,
        configurable: true
    });
    return ProductSelection;
}());

var _a;
//# sourceMappingURL=cart.model.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* unused harmony export Payment */
/* unused harmony export CartLine */
/* unused harmony export OrderConfirmation */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Order = (function () {
    function Order(repo, cart, router) {
        var _this = this;
        this.repo = repo;
        this.cart = cart;
        this.payment = new Payment();
        this.submitted = false;
        this.shipped = false;
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationStart */]; })
            .subscribe(function (event) {
            if (router.url.startsWith("/checkout")
                && _this.name != null && _this.address != null) {
                repo.storeSessionData("checkout", {
                    name: _this.name,
                    address: _this.address,
                    cardNumber: _this.payment.cardNumber,
                    cardExpiry: _this.payment.cardExpiry,
                    cardSecurityCode: _this.payment.cardSecurityCode
                });
            }
        });
        repo.getSessionData("checkout").subscribe(function (data) {
            if (data != null) {
                _this.name = data.name;
                _this.address = data.address;
                _this.payment.cardNumber = data.cardNumber;
                _this.payment.cardExpiry = data.cardExpiry;
                _this.payment.cardSecurityCode = data.cardSecurityCode;
            }
        });
    }
    Object.defineProperty(Order.prototype, "products", {
        get: function () {
            return this.cart.selections
                .map(function (p) { return new CartLine(p.productId, p.quantity); });
        },
        enumerable: true,
        configurable: true
    });
    Order.prototype.clear = function () {
        this.name = null;
        this.address = null;
        this.payment = new Payment();
        this.cart.clear();
        this.submitted = false;
    };
    Order.prototype.submit = function () {
        this.submitted = true;
        this.repo.createOrder(this);
    };
    return Order;
}());
Order = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__cart_model__["a" /* Cart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_model__["a" /* Cart */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], Order);

var Payment = (function () {
    function Payment() {
    }
    return Payment;
}());

var CartLine = (function () {
    function CartLine(productId, quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }
    return CartLine;
}());

var OrderConfirmation = (function () {
    function OrderConfirmation(orderId, authCode, amount) {
        this.orderId = orderId;
        this.authCode = authCode;
        this.amount = amount;
    }
    return OrderConfirmation;
}());

var _a, _b, _c;
//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(103);


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(repo) {
        this.repo = repo;
        repo.filter.reset();
        repo.filter.related = true;
        repo.getProducts();
        repo.getSuppliers();
        repo.getOrders();
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(237)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderAdminComponent = (function () {
    function OrderAdminComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(OrderAdminComponent.prototype, "orders", {
        get: function () {
            return this.repo.orders;
        },
        enumerable: true,
        configurable: true
    });
    OrderAdminComponent.prototype.markShipped = function (order) {
        this.repo.shipOrder(order);
    };
    return OrderAdminComponent;
}());
OrderAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(238)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], OrderAdminComponent);

var _a;
//# sourceMappingURL=orderAdmin.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = (function () {
    function OverviewComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(OverviewComponent.prototype, "products", {
        get: function () {
            return this.repo.products;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "orders", {
        get: function () {
            return this.repo.orders;
        },
        enumerable: true,
        configurable: true
    });
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(239)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], OverviewComponent);

var _a;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_model__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductAdminComponent = (function () {
    function ProductAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(ProductAdminComponent.prototype, "product", {
        get: function () {
            return this.repo.product;
        },
        enumerable: true,
        configurable: true
    });
    ProductAdminComponent.prototype.selectProduct = function (id) {
        this.repo.getProduct(id);
    };
    ProductAdminComponent.prototype.saveProduct = function () {
        if (this.repo.product.productId == null) {
            this.repo.createProduct(this.repo.product);
        }
        else {
            this.repo.replaceProduct(this.repo.product);
        }
        this.clearProduct();
        this.tableMode = true;
    };
    ProductAdminComponent.prototype.deleteProduct = function (id) {
        this.repo.deleteProduct(id);
    };
    ProductAdminComponent.prototype.clearProduct = function () {
        this.repo.product = new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* Product */]();
        this.tableMode = true;
    };
    Object.defineProperty(ProductAdminComponent.prototype, "products", {
        get: function () {
            return this.repo.products;
        },
        enumerable: true,
        configurable: true
    });
    return ProductAdminComponent;
}());
ProductAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(240)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], ProductAdminComponent);

var _a;
//# sourceMappingURL=productAdmin.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overview_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productAdmin_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productEditor_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orderAdmin_component__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__productAdmin_component__["a" /* ProductAdminComponent */], __WEBPACK_IMPORTED_MODULE_8__orderAdmin_component__["a" /* OrderAdminComponent */], __WEBPACK_IMPORTED_MODULE_7__productEditor_component__["a" /* ProductEditorComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductEditorComponent = (function () {
    function ProductEditorComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(ProductEditorComponent.prototype, "product", {
        get: function () {
            return this.repo.product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductEditorComponent.prototype, "suppliers", {
        get: function () {
            return this.repo.suppliers;
        },
        enumerable: true,
        configurable: true
    });
    ProductEditorComponent.prototype.compareSuppliers = function (s1, s2) {
        return s1 && s2 && s1.name == s2.name;
    };
    return ProductEditorComponent;
}());
ProductEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "admin-product-editor",
        template: __webpack_require__(241)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], ProductEditorComponent);

var _a;
//# sourceMappingURL=productEditor.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n    <a class=\"navbar-brand text-white\">SPORTS STORE Admin</a>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-3\">\r\n        <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin\"\r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            Overview\r\n        </button>\r\n        <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin/products\"\r\n                routerLinkActive=\"active\">\r\n            Products\r\n        </button>\r\n        <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin/orders\"\r\n                routerLinkActive=\"active\">\r\n            Orders\r\n        </button>\r\n    </div>\r\n    <div class=\"col p-2\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"orders?.length > 0; else nodata\" class=\"table table-striped\">\r\n    <tr>\r\n        <th>Customer</th>\r\n        <th>Address</th>\r\n        <th>Products</th>\r\n        <th>Total</th>\r\n        <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let o of orders\">\r\n        <td>{{o.name}}</td>\r\n        <td>{{o.address}}</td>\r\n        <td>{{o.products.length}}</td>\r\n        <td>{{o.payment.total | currency:USD:true}}</td>\r\n        <td *ngIf=\"!o.shipped; else shipped\">\r\n            <button class=\"btn btn-sm btn-primary\"\r\n                    (click)=\"markShipped(o)\">\r\n                Ship\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n<ng-template #shipped>\r\n    <td>Shipped</td>\r\n</ng-template>\r\n<ng-template #nodata>\r\n    <h3 class=\"text-center\">There are no orders</h3>\r\n</ng-template>"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<table class=\"table m-1\">\r\n    <tr>\r\n        <td>There are {{products?.length || 0}} products for sale</td>\r\n        <td>\r\n            <button class=\"btn btn-sm btn-info btn-block\"\r\n                    routerLink=\"/admin/products\">\r\n                Manage Products\r\n            </button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>There are {{orders?.length || 0}} orders</td>\r\n        <td>\r\n            <button class=\"btn btn-sm btn-info btn-block\"\r\n                    routerLink=\"/admin/orders\">\r\n                Manage Orders\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"tableMode; else create\" class=\"table table-sm table-striped\">\r\n    <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Category</th>\r\n        <th>Supplier</th>\r\n        <th>Price</th>\r\n        <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let p of products\">\r\n        <ng-template [ngIf]=\"product?.productId != p.productId\" [ngIfElse]=\"edit\">\r\n            <td>{{p.productId}}</td>\r\n            <td>{{p.name}}</td>\r\n            <td>{{p.category}}</td>\r\n            <td>{{p.supplier?.name || '(None)'}}</td>\r\n            <td>{{p.price | currency:USD:true}}</td>\r\n            <td>\r\n                <button class=\"btn btn-sm btn-primary\"\r\n                        (click)=\"selectProduct(p.productId)\">\r\n                    Edit\r\n                </button>\r\n                <button class=\"btn btn-sm btn-danger\"\r\n                        (click)=\"deleteProduct(p.productId)\">\r\n                    Delete\r\n                </button>\r\n            </td>\r\n        </ng-template>\r\n    </tr>\r\n    <tfoot>\r\n        <tr>\r\n            <td colspan=\"6\" class=\"text-center\">\r\n                <button class=\"btn btn-primary\"\r\n                        (click)=\"clearProduct(); tableMode = false\">\r\n                    Create\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </tfoot>\r\n</table>\r\n<ng-template #edit>\r\n    <td colspan=\"6\">\r\n        <admin-product-editor></admin-product-editor>\r\n        <div class=\"text-center\">\r\n            <button class=\"btn btn-sm btn-primary\" (click)=\"saveProduct()\">\r\n                Save\r\n            </button>\r\n            <button class=\"btn btn-sm btn-info\" (click)=\"clearProduct()\">\r\n                Cancel\r\n            </button>\r\n        </div>\r\n    </td>\r\n</ng-template>\r\n<ng-template #create>\r\n    <admin-product-editor></admin-product-editor>\r\n    <button class=\"btn btn-primary\" (click)=\"saveProduct()\">\r\n        Save\r\n    </button>\r\n    <button class=\"btn btn-info\" (click)=\"clearProduct()\">\r\n        Cancel\r\n    </button>\r\n</ng-template>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"product.name\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Category</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"product.category\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Supplier</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"product.supplier\"\r\n            [compareWith]=\"compareSuppliers\">\r\n        <option *ngFor=\"let s of suppliers\" [ngValue]=\"s\">{{s.name}}</option>\r\n    </select>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Description</label>\r\n<textarea class=\"form-control\" [(ngModel)]=\"product.description\"></textarea>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Price</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"product.price\" />\r\n</div>"

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 68;

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart_model__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartDetailComponent = (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    return CartDetailComponent;
}());
CartDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(120)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */]) === "function" && _a || Object])
], CartDetailComponent);

var _a;
//# sourceMappingURL=cartDetail.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order_model__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutDetailsComponent = (function () {
    function CheckoutDetailsComponent(router, order) {
        this.router = router;
        this.order = order;
        if (order.products.length == 0) {
            this.router.navigateByUrl("/cart");
        }
    }
    return CheckoutDetailsComponent;
}());
CheckoutDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(123)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */]) === "function" && _b || Object])
], CheckoutDetailsComponent);

var _a, _b;
//# sourceMappingURL=checkoutDetails.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order_model__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutPaymentComponent = (function () {
    function CheckoutPaymentComponent(router, order) {
        this.router = router;
        this.order = order;
        if (order.name == null || order.address == null) {
            router.navigateByUrl("/checkout/step1");
        }
    }
    return CheckoutPaymentComponent;
}());
CheckoutPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(124)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */]) === "function" && _b || Object])
], CheckoutPaymentComponent);

var _a, _b;
//# sourceMappingURL=checkoutPayment.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order_model__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutSummaryComponent = (function () {
    function CheckoutSummaryComponent(router, order) {
        this.router = router;
        this.order = order;
        if (order.payment.cardNumber == null
            || order.payment.cardExpiry == null
            || order.payment.cardSecurityCode == null) {
            router.navigateByUrl("/checkout/step2");
        }
    }
    CheckoutSummaryComponent.prototype.submitOrder = function () {
        this.order.submit();
        this.router.navigateByUrl("/checkout/confirmation");
    };
    return CheckoutSummaryComponent;
}());
CheckoutSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(125)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */]) === "function" && _b || Object])
], CheckoutSummaryComponent);

var _a, _b;
//# sourceMappingURL=checkoutSummary.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order_model__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent(router, order) {
        this.router = router;
        this.order = order;
        if (!order.submitted) {
            router.navigateByUrl("/checkout/step3");
        }
    }
    return OrderConfirmationComponent;
}());
OrderConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(126)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* Order */]) === "function" && _b || Object])
], OrderConfirmationComponent);

var _a, _b;
//# sourceMappingURL=orderConfirmation.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductSelectionComponent = (function () {
    function ProductSelectionComponent() {
    }
    return ProductSelectionComponent;
}());
ProductSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: "store-products",
        template: __webpack_require__(129)
    })
], ProductSelectionComponent);

//# sourceMappingURL=productSelection.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(productId, name, category, description, price, supplier, ratings) {
        this.productId = productId;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.supplier = supplier;
        this.ratings = ratings;
    }
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.bundle.js.map