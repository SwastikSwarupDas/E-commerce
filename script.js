async function abcd(){
    // let raw = await fetch(`https://randomuser.me/api/`)
    // // .then(function(raw){
    // //     return raw.json();
    // // })
    // let ans= await raw.json();
    // console.log(ans);
    let raw = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
    let ans = await raw.json();
    console.log(ans);
}

abcd();