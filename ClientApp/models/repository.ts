import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()
export class Repository {
    private productData: Product;
    constructor(private http: Http) {
        this.getProduct(1);
    }
    getProduct(id: number) {
        this.http.get("/api/products/" + id)
            .subscribe(response => {
                this.productData = response.json();
                console.log("Product Data Received");
            });

    }
    get product(): Product {
        console.log("Product Data Requested");
        return this.productData;
    }
}