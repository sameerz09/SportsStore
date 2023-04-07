import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
const productsUrl = "/api/products";
@Injectable()
export class Repository {
    constructor(private http: Http) {
        this.getProducts(true);
    }
    getProduct(id: number) {
        this.sendRequest(RequestMethod.Get, productsUrl + "/" + id)
            .subscribe(response => {
                this.product = response.json();
            });
    }
    getProducts(related = false) {
        this.sendRequest(RequestMethod.Get, productsUrl + "?related=" + related)
            .subscribe(response => this.products = response);
    }
    private sendRequest(verb: RequestMethod, url: string, data?: any)
        : Observable<any> {
        return this.http.request(new Request({
            method: verb, url: url, body: data
        })).map(response => response.json());
    }
    product: Product;
    products: Product[];
}