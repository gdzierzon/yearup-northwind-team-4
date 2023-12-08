class ProductsService{
    baseUrl=" http://localhost:3000/products";

    async getAllProducts(){
        // fetch(this.baseUrl).then(response=>response.json()).then(products)
        let response=await fetch(this.baseUrl);
        let products=await response.json();

        return products;
    }
}

