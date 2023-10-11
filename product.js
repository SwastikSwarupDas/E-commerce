var product = document.querySelector(".product");
product.style.marginTop = "4vw";
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

async function loadProduct(){ 

    let response = await fetch(`https://fakestoreapi.com/products/${productId}`);

    console.log(productId);

    let productData = await response.json();
  
    let productImage = document.createElement("div");
    let productDescription = document.createElement("div");

    let img = document.createElement("img");

    img.setAttribute("src",productData.image);
    
    let bagbutton = document.createElement("button");
    let buttonText = document.createTextNode("add to bag");

    bagbutton.style.width="14vw";
    bagbutton.style.backgroundColor="#fff";
    bagbutton.style.padding="1vw 3vw";
    bagbutton.style.border="2px solid rgba(110,160,160,0.2)";
    bagbutton.style.borderRadius="20px";
    bagbutton.style.fontSize="1.2vw";
    bagbutton.style.color="rgba(100,100,100,0.7)"
    bagbutton.appendChild(buttonText);
    
    

    let category = document.createElement("div");
    let categoryText = document.createTextNode(productData.category);

    category.style.fontSize = "1vw";
    category.style.fontWeight = "100";
    category.style.letterSpacing = "0.2vw";
    category.style.color = "rgb(120,150,150)";
    
    let productTitle = document.createElement("div");
    let productTitleText = document.createTextNode(productData.title);

    productTitle.style.fontSize = "1.5vw";
    productTitle.style.letterSpacing = "0.1vw";

    let desc = document.createElement("div");
    let descText = document.createTextNode(productData.description);
    
    desc.style.color = "rgb(90,90,120)";
    desc.style.fontSize = "1.1vw";
    desc.style.lineHeight = "1.5vw";

    desc.appendChild(descText);
    category.appendChild(categoryText);
    productTitle.appendChild(productTitleText);
    let price = document.createElement("div");
    let priceText = document.createTextNode("¥ "+productData.price*1500);
    price.appendChild(priceText);

    price.style.fontSize = "1vw";
    price.style.color = "rgb(40,40,40)";
    price.style.letterSpacing = "0.08vw";
    img.style.width = "25vw";

    productImage.style.margin = "2vw 4vw";
    productImage.style.width = "28vw";

    productDescription.appendChild(category);
    productDescription.appendChild(productTitle);
    productDescription.appendChild(desc);
    productDescription.appendChild(price);
    productDescription.appendChild(bagbutton);

    productDescription.style.width = "40vw";
    productDescription.style.display = "flex";
    productDescription.style.flexDirection = "column";
    productDescription.style.padding = "3vw 5vw";
    productDescription.style.gap = "2vw";

    productImage.appendChild(img);

    product.appendChild(productImage);
    product.appendChild(productDescription);

    // Code for Button Lets go Baby
    
    bagbutton.addEventListener("click", function() {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(product => product.id === productData.id);

    if (existingProduct) {
       
        existingProduct.quantity += 1;
    } else {
       
        productData.quantity = 1;
        cart.push(productData);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    
    console.log("Cart updated:", cart);

});
}

loadProduct();