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
        products.forEach(displayProduct)
    }
}

function displayProduct(product) {
      // clone template html instead of building the card by hand
      const card = productsTemplate.content.cloneNode(true)

      // set all values
      card.getElementById("products-header").innerText = product.productName
      card.getElementById("supplier-value").innerText = product.supplier
      card.getElementById("stock-value").innerText = product.unitsInStock
      card.getElementById("price-value").innerText = product.unitPrice
  
      productContainer.appendChild(card)
}