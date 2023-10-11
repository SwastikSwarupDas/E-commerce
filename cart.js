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
      

        let addButton = document.createElement("button");
        let addButtonText = document.createTextNode("add one");
        addButton.appendChild(addButtonText);

      

        let minusButton = document.createElement("button");
        let minusButtonText = document.createTextNode("take one out");
        minusButton.appendChild(minusButtonText);

        buttons.appendChild(addButton);
        buttons.appendChild(minusButton);
        buttons.appendChild(removeButton);

        buttons.style.display="flex";
        buttons.style.gap="1.4vw";
        
        minusButton.style.width="8vw";
        minusButton.style.backgroundColor="#fff";
        minusButton.style.padding="0.5vw 0vw";
        minusButton.style.border="2px solid rgba(110,120,120,0.5)";
        minusButton.style.borderRadius="15px";
        minusButton.style.fontSize="1vw";
        minusButton.style.color="rgba(100,100,100,0.7)";

        addButton.style.gap="1vw";
        addButton.style.width="8vw";
        addButton.style.backgroundColor="#fff";
        addButton.style.padding="0vw 0vw";
        addButton.style.border="2px solid rgba(110,120,120,0.5)";
        addButton.style.borderRadius="15px";
        addButton.style.fontSize="1vw";
        addButton.style.color="rgba(100,100,100,0.7)";

        removeButton.style.gap="1vw";
        removeButton.style.width="8vw";
        removeButton.style.backgroundColor="#fff";
        removeButton.style.padding="0vw 0vw";
        removeButton.style.border="2px solid rgba(110,120,120,0.5)  ";
        removeButton.style.borderRadius="15px";
        removeButton.style.fontSize="1vw";
        removeButton.style.color="rgba(100,100,100,0.7)";


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