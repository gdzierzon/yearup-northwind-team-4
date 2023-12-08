let productsService;
let selectProducts;
document.addEventListener("DOMContentLoaded",()=>{
selectProducts=document.getElementById("selectProducts");
selectProducts.addEventListener("change",filterProducts)
})

function filterProducts(){
    selectProducts=document.getElementById("selectProducts");
    let selectValue=selectProducts.value;
    console.log(selectValue);
    

}
