// Enregistrer une reférence pour le menu 
let listProductHTML = document.querySelector('.listProduct');

//create an empty list product array where the js data are loaded
let listProducts = [];
/** Method which display each product item on the html menu pages */
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    console.log(listProducts.length);
    if(listProducts.length > 0){
        listProducts.forEach(product =>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('col');
            newProduct.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.text}</p>
                    </div>
                    <div class="mb-5 d-flex justify-content-around">
                        <h3 class="align-baseline mb-0">${product.price} $</h3>
                        <button class="btn btn-menu rounded-circle addCart"><img src="/images/cart.svg"></button>
                    </div>
                </div>
                `;
                //inject this new element in the listproduct pages with appendChild()
                listProductHTML.appendChild(newProduct);

        })
    }
}
/*  Methode to get product data from json file 
    to assign it to the listProduct variable */
const initApp = () => {
    fetch('/products.json')
    .then(response => response.json()) // read and parse the data using json() method
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}

initApp();