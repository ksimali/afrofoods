// Enregistrer de reférences 
let listProductHTML = document.querySelector('.listProduct');

/** Declaration de variable et initialisation */
let listProducts = []; //create an empty list product array where the js data are loaded


/** Method which display each product item on the html menu pages */
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product =>{
            // create an div element with a .col class
            let newProduct = document.createElement('div'); 
            newProduct.classList.add('col');
            newProduct.dataset.id = product.id; // to get all the product id displayed on the page
            // Add a html content into the new created div
            newProduct.innerHTML = ` 
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.text}</p>
                    </div>
                    <div class="mb-5 d-flex justify-content-around">
                        <h3 class="align-baseline mb-0">${product.price} $</h3>
                        <button class="btn btn-menu rounded-circle">
                            <img src="/images/cart.svg" class="addCart">
                        </button>
                    </div>
                </div>
                `;
                //inject this new element in the listproduct pages with appendChild()
                listProductHTML.appendChild(newProduct);

        })
    }
}
/** Method which add the product to cart 
    when the user click on the cart image   */
listProductHTML.addEventListener('click',(event) =>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.parentElement.parentElement.parentElement.dataset.id;
        //call to addToCart method
        addToCart(product_id);
    }
})
// Method which add an item to a cart
const addToCart = (product_id) =>{
    console.log('hello world!');
}
/*  Method to get product data from json file 
    to assign it to the listProducts variable */
const initApp = () => {
    fetch('/products.json')
    .then(response => response.json()) // read and parse the data using json() method
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}

initApp();