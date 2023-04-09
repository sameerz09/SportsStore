import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";
import { Supplier } from "../models/supplier.model";
<<<<<<< HEAD


=======
>>>>>>> 994cbf911b5a8ac7f8bc8e0da821c1d22f1dbad0
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private repo: Repository) { }
    get product(): Product {
        return this.repo.product;
    }
    get products(): Product[] {
        return this.repo.products;
    }
<<<<<<< HEAD
    createProduct() {
this.repo.createProduct(new Product(0, "X-Ray Scuba Mask", "Watersports",
"See what the fish are hiding", 49.99, this.repo.products[0].supplier));
}
createProductAndSupplier() {
let s = new Supplier(0, "Rocket Shoe Corp", "Boston", "MA");
let p = new Product(0, "Rocket-Powered Shoes", "Running",
"Set a new record", 100, s);
this.repo.createProductAndSupplier(p, s);
    }

    
=======
createProduct() {
          this.repo.createProduct(new Product(0, "X-Ray Scuba Mask", "Watersports",
          "See what the fish are hiding", 49.99, this.repo.products[0].supplier));
}
createProductAndSupplier() {
    let s = new Supplier(0, "Rocket Shoe Corp", "Boston", "MA");
    let p = new Product(0, "Rocket-Powered Shoes", "Running",
            "Set a new record", 100, s);
    this.repo.createProductAndSupplier(p, s);
}

>>>>>>> 994cbf911b5a8ac7f8bc8e0da821c1d22f1dbad0
}