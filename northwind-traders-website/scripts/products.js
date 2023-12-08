let productsService;
let selectProducts;
let products;
document.addEventListener("DOMContentLoaded",()=>{
selectProducts=document.getElementById("selectProducts");
selectProducts.addEventListener("change",filterProducts)
})

async function filterProducts(){
    selectProducts=document.getElementById("selectProducts");
    let selectValue=selectProducts.value;
    console.log(selectValue);
    
    productsService = new ProductsService()
    if(selectValue === "View All"){
        products = await productsService.getAllProducts()
        console.log(products);
        displayProducts(products)
    }
}

function displayProducts(products) {
    
}