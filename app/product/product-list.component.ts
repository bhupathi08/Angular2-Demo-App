import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe} from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import {ProductService} from './product.service'; 

@Component({
    selector: 'pm-products',
    templateUrl: 'app/product/product-list.component.html',
    pipes:[ProductFilterPipe],
    directives: [StarComponent]
})

export class ProductListComponent implements OnInit{
    pageTitle: String = 'Product List!';
    imageWidth : number = 50;
    imageMargin:number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: IProduct[];
    
    constructor(private _productService: ProductService){
        
    }
        toggleImage() : void {
            this.showImage = !this.showImage;
        }
        
        ngOnInit(): void{
            this._productService.getProducts()
            .subscribe(
                products=> this.products = products,
                error => this.errorMessage = <any>error);
            
        }

}