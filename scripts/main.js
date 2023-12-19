// Enregistrer de reférences 
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartCount = document.querySelector('.count');

/** Declaration de variable et initialisation */
let listProducts = []; //create an empty list product array where the json data are loaded
let carts = []; // create an empty array to store the cart value

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

/**
 * Method which add the product to cart
 * when the user click on the cart image
 */
listProductHTML.addEventListener('click',(event) =>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.parentElement.parentElement.parentElement.dataset.id;
        //call to addToCart method
        addToCart(product_id);
    }
})

/**
 * Method which add an item into the cart object array.
 * @param {*} product_id 
 */
const addToCart = (product_id) =>{
    let positionInCart = carts.findIndex((value) => value.product_id == product_id);
    console.log(positionInCart);
    // if the shopping cart is empty
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionInCart < 0){ // if there is data in the shopping cart & the clicked dish is not in it 
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    }else{ // if the click item already exist in the shopping cart
        carts[positionInCart].quantity = carts[positionInCart].quantity +1 ; // Incrémente quantity de 1
    }
    console.log(carts);
}

/**
 *  Method to get product data from a json file
 *  to assign it to the listProducts variable 
 */
const initApp = () => {
    fetch('/products.json')
    .then(response => response.json()) // read and parse the data using json() method
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}

initApp();