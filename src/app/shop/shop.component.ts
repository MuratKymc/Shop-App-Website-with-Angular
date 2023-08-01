import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',

})

export class ShopComponent {

    public selectedCategory: Category = null;
    public productPerPage = 3;
    public selectedPage = 1;
    public selectedProducts: Product[] = [];


    constructor(
        private productRepository: ProductRepository
    ) { }



    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productPerPage;

        this.selectedProducts = this.productRepository
                                     .getProducts(this.selectedCategory);


        return this.selectedProducts
            .slice(index, index + this.productPerPage);


    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository
            .getProducts(this.selectedCategory).length / this.productPerPage))
            .fill(0)
            .map((a, i) => i + 1)
    }



    changePage(p: number) {
        this.selectedPage = p;
    }

    changePageSize(size: number){
        this.productPerPage= size;
        this.changePage(1); 
    }


    getCategory(category : Category){
        this.selectedCategory = category;
    }




}