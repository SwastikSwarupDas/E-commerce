let cart = JSON.parse(localStorage.getItem("cart")) || "[]";
let bagination = document.querySelector(".bagination");

async function loadCart(){
    for(let i=0; i<cart.length;i++){
        let product = cart[i];
        let raw = await fetch(`https://fakestoreapi.com/products/${product.id}`);
        let productData = await raw.json();

        let removeButton = document.createElement("button");
        let removeButtonText = document.createTextNode("remove");
        removeButton.appendChild(removeButtonText);

        let buttons = document.createElement("div");
        buttons.appendChild(removeButton);

        let productDiv = document.createElement("div");
        productDiv.classList.add("product-div");

        let productDesc = document.createElement("div");
        productDesc.classList.add("product-desc");

        let imageHolder = document.createElement("div");
        imageHolder.classList.add("imageHolder");

        let img = document.createElement("img");
        img.setAttribute("src",productData.image);

        img.style.width = "10vw";
           
        let productTitle = document.createElement("div");
        let titleText = document.createTextNode(product.title);

        let price = document.createElement("div");
        let priceText = document.createTextNode("¥ "+productData.price*1500);

        let quantity = document.createElement("div");
        let quantityText = document.createTextNode(product.quantity+" in bag");
        
        productTitle.appendChild(titleText);
        productTitle.style.fontSize="1.5vw";
        productTitle.style.fontWeight="300";
        productTitle.style.letterSpacing="0.1vw";

        price.style.color="rgba(0,0,0,0.6)";
        price.style.letterSpacing="0.1vw";

        quantity.appendChild(quantityText);
        quantity.style.color="rgba(90,90,90,0.5)";
        

        price.appendChild(priceText);
        productDesc.appendChild(productTitle);
        productDesc.appendChild(price);
        productDesc.appendChild(quantity);
        productDesc.appendChild(buttons);

        productDesc.style.width = "35vw";
        productDesc.style.display="flex";
        productDesc.style.flexDirection="column";
        productDesc.style.gap="1vw";

        imageHolder.appendChild(img);
        
        productDiv.appendChild(imageHolder);
        productDiv.appendChild(productDesc);

        productDiv.style.display="flex";
        productDiv.style.alignItems="center";
        productDiv.style.justifyContent="space-evenly";
        productDiv.style.padding="2vw 10vw";

        bagination.appendChild(productDiv);

    }
}

loadCart();