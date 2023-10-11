var productDisplay = document.querySelector(".menProductDisplay");

var womenProductDisplay = document.querySelector(".womenProductDisplay");

async function loadMensClothes(){
    let raw = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
    let product = await raw.json();
    // console.log(product);

    product.forEach((element) => {

        /*Basically this is working but not with getElementwithClassName*/

        let products = document.createElement("div");
        let imageHolder = document.createElement("div");

        imageHolder.style.display = "flex";
        imageHolder.style.alignItems = "center";
        imageHolder.style.padding = "5vw 10vw";
        imageHolder.style.height = "20vw";
        imageHolder.style.height = "25vw";
        imageHolder.style.overflowY = "hidden";

        let img = document.createElement("img");
        img.setAttribute("src",element.image);  
        
        products.style.display = "flex";
        products.style.flexDirection = "column";
        products.style.alignItems = "center";
        products.style.justifyContent = "space-between";

        imageHolder.appendChild(img);

        products.appendChild(imageHolder);

        img.style.width = "15vw";

        let title = document.createElement("h1");

        title.style.fontSize = "1vw";
        title.style.fontWeight = "100";
       
        
        let ProductTextDiv = document.createElement("div");
        let titleText = document.createTextNode(element.title);
        
        ProductTextDiv.appendChild(title);

        title.appendChild(titleText);
        products.appendChild(ProductTextDiv);

        products.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

        productDisplay.appendChild(products);

    });
}

async function loadWomensClothes(){
    let raw = await fetch('https://fakestoreapi.com/products/category/women\'s clothing?limit=4');
    let product = await raw.json();

    product.forEach((element) => {

        /*Basically this is working but not with getElementwithClassName*/

        let products = document.createElement("div");
        let imageHolder = document.createElement("div");


        imageHolder.style.display = "flex";
        imageHolder.style.alignItems = "center";
        imageHolder.style.padding = "5vw 10vw";
        imageHolder.style.height = "25vw";
        imageHolder.style.overflowY = "hidden";

        let img = document.createElement("img");
        img.setAttribute("src",element.image);  
        
        products.style.display = "flex";
        products.style.flexDirection = "column";
        products.style.alignItems = "center";
        products.style.justifyContent = "space-between";

        imageHolder.appendChild(img);

        img.style.width = "15vw";

        let title = document.createElement("h1");

        title.style.fontSize = "1vw";
        title.style.fontWeight = "100";
       
        
        let ProductTextDiv = document.createElement("div");
        let titleText = document.createTextNode(element.title);
        
        title.appendChild(titleText);
        ProductTextDiv.appendChild(title);
        
        products.appendChild(imageHolder);
        products.appendChild(ProductTextDiv);

        products.style.margin = "0vw 2vw";

        products.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

        womenProductDisplay.appendChild(products);

    });
}

loadMensClothes();
loadWomensClothes();