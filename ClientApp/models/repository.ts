import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()
export class Repository {
    constructor(private http: Http) {
        this.getProduct(1);
    }
    getProduct(id: number) {
        this.http.get("/api/products/" + id)
            .subscribe(response => this.product = response.json());
    }
    product: Product;
}