webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(16);
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
        this.chessCategory = "chess";
    }
    CategoryFilterComponent.prototype.setCategory = function (category) {
        this.repo.filter.category = category;
        this.repo.getProducts();
    };
    return CategoryFilterComponent;
}());
CategoryFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "category-filter",
        template: __webpack_require__(107)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], CategoryFilterComponent);

var _a;
//# sourceMappingURL=categoryFilter.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
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

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(16);
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
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 103:
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

/***/ }),

/***/ 104:
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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <category-filter></category-filter>\r\n            <product-table></product-table>\r\n        </div>\r\n        <div class=\"col\">\r\n            <product-detail></product-detail>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-1\">\r\n    <button class=\"btn btn-primary\" (click)=\"setCategory('soccer')\">Soccer</button>\r\n    <button class=\"btn btn-primary\" (click)=\"setCategory(chessCategory)\">Chess</button>\r\n    <button class=\"btn btn-primary\" (click)=\"setCategory('Water' + 'Sports')\">Watersports</button>\r\n    <button class=\"btn btn-primary\" (click)=\"setCategory(null)\">All</button>\r\n</div>"

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Product</th></tr>\r\n    <tr><th>Name</th><td>{{product?.name}}</td></tr>\r\n    <tr><th>Category</th><td>{{product?.category || 'No Data'}}</td></tr>\r\n    <tr>\r\n        <th>Description</th>\r\n        <td>{{product?.description || 'No Data'}}</td>\r\n    </tr>\r\n    <tr><th>Price</th><td>{{product?.price || 'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Supplier</th></tr>\r\n    <tr><th>Name</th><td>{{product?.supplier?.name}}</td></tr>\r\n    <tr><th>City</th><td>{{product?.supplier?.city}}</td></tr>\r\n    <tr><th>State</th><td>{{product?.supplier?.state}}</td></tr>\r\n    <tr><th>Products</th><td>{{product?.supplier?.products?.length}}</td></tr>\r\n</table>"

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <tr><th>Name</th><th>Category</th><th>Price</th><th></th></tr>\r\n    <tr *ngFor=\"let product of products\">\r\n        <td>{{product.name}}</td>\r\n        <td>{{product.category}}</td>\r\n        <td>{{product.price}}</td>\r\n        <td>\r\n            <button class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"selectProduct(product.productId)\">\r\n                Details\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__ = __webpack_require__(101);
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
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__["a" /* Filter */]();
        this.suppliers = [];
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.products = response; });
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
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    return Repository;
}());
Repository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(94);


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 65;

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailComponent = (function () {
    function ProductDetailComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(ProductDetailComponent.prototype, "product", {
        get: function () {
            //console.log(this.repo.product.name);
            return this.repo.product;
        },
        enumerable: true,
        configurable: true
    });
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "product-detail",
        template: __webpack_require__(108)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], ProductDetailComponent);

var _a;
//# sourceMappingURL=productDetail.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTableComponent = (function () {
    function ProductTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(ProductTableComponent.prototype, "products", {
        get: function () {
            return this.repo.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductTableComponent.prototype.selectProduct = function (id) {
        this.repo.getProduct(id);
        this.router.navigateByUrl("/detail");
    };
    return ProductTableComponent;
}());
ProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "product-table",
        template: __webpack_require__(109)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductTableComponent);

var _a, _b;
//# sourceMappingURL=productTable.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(98);


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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_model__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__ = __webpack_require__(104);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(106),
        styles: [__webpack_require__(105)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_productTable_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__structure_categoryFilter_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_productDetail_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__structure_productTable_component__["a" /* ProductTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__structure_categoryFilter_component__["a" /* CategoryFilterComponent */], __WEBPACK_IMPORTED_MODULE_8__structure_productDetail_component__["a" /* ProductDetailComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* RoutingConfig */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure_productTable_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structure_productDetail_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });



var routes = [
    { path: "table", component: __WEBPACK_IMPORTED_MODULE_1__structure_productTable_component__["a" /* ProductTableComponent */] },
    { path: "detail", component: __WEBPACK_IMPORTED_MODULE_2__structure_productDetail_component__["a" /* ProductDetailComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__structure_productTable_component__["a" /* ProductTableComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.bundle.js.map