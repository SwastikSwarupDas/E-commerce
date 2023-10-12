let cart = JSON.parse(localStorage.getItem("cart")) || "[]";
let bagination = document.querySelector(".bagination");
let bill = document.querySelector(".tab");

async function loadCart(){
    for(let i=0; i<cart.length;i++){
        let product = cart[i];
        let raw = await fetch(`https://fakestoreapi.com/products/${product.id}`);
        let productData = await raw.json();

        let removeButton = document.createElement("button");
        // removeButton.setAttribute("data-product-id", product.id);
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
        let billTitleText = document.createTextNode((product.title).toUpperCase());

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
        productDiv.style.gap="10vw";
        productDiv.style.justifyContent="space-evenly";
        productDiv.style.padding="2vw 2vw";

        bagination.appendChild(productDiv);

        let billList = document.createElement("div");
        let billItemName = document.createElement("div");
        billItemName.appendChild(billTitleText);
        let billPrice = document.createTextNode("¥ " + productData.price*1500 + " x" + product.quantity);
        
        billList.appendChild(billPrice);

        billList.style.fontSize="0.7vw";
        billList.style.color="rgba(0,0,0,0.7)";
        billList.style.display="flex";
        billList.style.flexDirection="column";
        billList.style.alignItems="end";
        billList.style.paddingRight="1.1vw";

        billItemName.style.display="flex";
        billItemName.style.flexDirection="column";
        billItemName.style.alignItems="start";
        billItemName.style.width="20vw";
        billItemName.style.fontSize="0.7vw";
        billItemName.style.color="rgba(0,0,0,0.5)";


        let billItem = document.createElement("div");

        billItem.appendChild(billItemName);
        billItem.appendChild(billList);

        bill.appendChild(billItem);

        addButton.addEventListener("click",function(){
            product.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart)); 
            quantity.innerText=product.quantity+" in bag";
            billList.innerText="¥ "+product.price*1500 + " x" + product.quantity;
        });

        minusButton.addEventListener("click",function(){
            product.quantity -= 1;
            let productIndex = cart.findIndex(p => p.id == product.id);
            if (product.quantity === 0) {
                cart.splice(productIndex, 1);
                location.reload();
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            billList.innerText="¥ " +product.price*1500 + " x" + product.quantity;
            quantity.innerText=product.quantity+" in bag";  
        
        });
        
        removeButton.addEventListener("click",function(){
            let productIndex = cart.findIndex(product => product.id == product.id);
            if (productIndex > -1) {
                cart.splice(productIndex, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart)); 
            location.reload();
        });
    }
}

loadCart();