import { Injectable } from '@nestjs/common';
import { ProductDTO } from '../dto/products.dto';
@Injectable()
export class ProductsService {

    private products: ProductDTO[] = [
        { name:'car1', id: 1, price: 100 },
        { name:'car2', id: 2, price: 200 },
        { name:'car3', id: 3, price: 300 },
    ];

    findAll(): ProductDTO[] {
        return this.products
    }
    findOne(id: number) {
        return this.products.find(p => p.id == id)
    }
}
