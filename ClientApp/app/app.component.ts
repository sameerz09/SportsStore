import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";
import { Supplier } from "../models/supplier.model";
import { ErrorHandlerService } from "./errorHandler.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
private lastError: string[];
constructor(errorHandler: ErrorHandlerService) {
errorHandler.errors.subscribe(error => {
this.lastError = error;
});
}
get error(): string[] {
return this.lastError;
}
clearError() {
this.lastError = null;
}



}