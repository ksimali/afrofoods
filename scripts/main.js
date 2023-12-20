// Récupération d'élements du dom de la class add-cart
let carts = document.querySelectorAll('.add-cart');

// Declaration et initialisation d'un tableau contenant les menus
let products = [
    {
        name: "KOKI",
        tag: "koki",
        image:"/images/Koki-1.jpg",
        price: 19.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "NDOLE",
        tag: "ndole",
        image:"/images/ndole.webp",
        price: 22.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "BEIGNETS AUX HARICOTS",
        tag: "beignetsauxharicots",
        image:"/images/Beignet-Haricot.jpg",
        price: 11.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "EGUSI",
        tag: "egusi",
        image:"/images/Egusi-Puddingjpg.jpg",
        price: 19.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "FUFU ET ERU",
        tag: "fufueteru",
        image:"/images/Fufu-and-Eru.jpg",
        price: 16.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "SOUPE AUX PINOTTES",
        tag: "soupeauxpinottes",
        image:"/images/Groundnut-Soup.jpg",
        price: 11.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "POULET DG",
        tag: "pouletdg",
        image:"/images/poulet-dg.jpeg",
        price: 25.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    },
    {
        name: "POISSON BRAISÉ",
        tag: "poissonbraisé",
        image:"/images/poisson-braisé.jpeg",
        price: 22.00,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.",
        inCart: 0
    }
]

/**
 * procédure qui compte le nombre d'item dans le panier 
 * à chaque evenement click sur .add-cart element
 */
for(let i=0;i < carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]); // Appel de la fonction cartNumbers auquel on passe un argument product[i]
        totalCost(products[i]); // Appel de la fonction totalCost(calcul le cout total panier)
    })
}
/**
 * fonction qui affiche le nombre d'item du panier dans 
 * l'icone panier si existe
 */
function loadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers'); //récupère les objets ayant comme propriétés cartNumbers du localStorage
    if(productNumbers){
        document.querySelector('.count').textContent = productNumbers; // Selectionne le contenu texte du 1er element avec .count class et on y insere productNumbers
    }
};

/**
 * fonction qui va compter le nombre d'item ajouter au panier
 */
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers'); // récupérer l'objet stocké dans localStorage
    
    productNumbers  = parseInt(productNumbers); // traduire en entier la string productNumbers
    //Comptez le nombre d'items ajouter au panier et sauvegarder dans localStorage
    if(productNumbers){ // si item dans panier
        localStorage.setItem('cartNumbers', productNumbers + 1); // enregistrer item dans localStorage
        document.querySelector('.count').textContent = productNumbers + 1; // augmenter le nombre d'item de 1 sur l'icon cart dans navbar
    }else{ // Si panier vide 
        localStorage.setItem('cartNumbers', 1); // enregistre l'element cliqué dans localStorage
        document.querySelector('.count').textContent = 1; // augmente le nombre d'item a 1 sur l'icon cart dans navbar
    }

    setItems(product);// appel de la fonction setItems()
}
/**
 * fonction qui récupére les données des produits cliqués,
 * et qui les sauvegarde dans localStorage.
 */
function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");// récupère les objets ayant comme propriétés productInCart du localStorage
    cartItems = JSON.parse(cartItems); // convertit cartItems en objet js
    console.log("My cartItems are", cartItems);
    if(cartItems != null){ // si panier n'est pas vide
        // gestion error Cannot read properties of undefined (reading 'inCart')
        if(cartItems[product.tag] == undefined){ //Si la propriété tag de product object est undefined
            cartItems = { // ajouter le produit nouvellement cliqué au panier déjà existant
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; // augmente la valeur de InCart de 1
    }else{ // si panier vide
        product.inCart = 1; // affecte la valeur 1 à la propriété incart de products 
        cartItems = {
            [product.tag]: product
        }

    }

    //créer un objet js avec pour key name 'productInCart' et l'objet js cartItems comme key value qu'on convertit en JSON string
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); 

}
/**
 * fonction qui calcul le montant total du panier
 */
function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");
    //on peut calculer maintenant
    if(cartCost != null){
        // convertit la variable string cartCost en paramètre en nombre
        cartCost = parseInt(cartCost); 
        // calcul du total et sauvegarde dans localStorage paramètre totalCost
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price)
    }
    
}
/**
 * fonction afficherCart() qui affiche le contenu du panier au chargement de la page cart.html
 */
function afficherCart(){
    let cartItems = localStorage.getItem("productsInCart"); // récuperer dans localStorage le paramèter productInCart et l'affecter à la variable cartItems
    cartItems = JSON.parse(cartItems); // convertit l'objet JSON récupérer en objet JS
    let listContainer = document.querySelector(".list-container");
    let totalPanier = document. querySelector(".total-panier");
    let cartCost = localStorage.getItem("totalCost");
    console.log(cartItems);
    if(cartItems && listContainer){
        listContainer.innerHTML = ''; // supprimer le panier au démarrage de la page
        //// On parcourt les objet et on récupere les key values sous forme d'un tableau et on fait un .map pour recréer un tableau qui comprend le html
        Object.values(cartItems).map(item =>{ 
            listContainer.innerHTML += ` 
            <tr class="list-cart">
                <td class="product-image">
                    <img src="${item.image}" alt="Ndole-repas" class="img-fluid rounded-4">
                </td>
                <td class="product-name">
                    <h5 class="mb-0"> ${item.name}</h5>
                </td>
                <td>${item.price},00 $</td>
                <td>
                    <div class="input-group quantity-container">
                        <div class="input-group-prepend">
                            <button class="btn" type="button">&minus;</button>
                        </div>
                        <span class="mx-1">${item.inCart}</span>
                        <div class="input-group-append">
                            <button class="btn" type="button">&plus;</button>
                        </div>
                    </div>
                </td>
                <td>${item.price * item.inCart}</td>
                <td><button class="btn" type="button">&times</button></td>
            </tr>
        `;
        });
        totalPanier.innerHTML = `
        <div class="row justify-content-end">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-12 text-right border-bottom mb-2">
                        <h3 class="text-uppercase"> Total panier</h3>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <span class="text-black">Total panier</span>
                        </div>
                        <div class="col-md-6 total-cart">
                            <strong class="text-black">${cartCost},00 $</strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <a href="/pages/checkout.html"><button class="btn btn-black btn-lg">valider la commande</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
`;
        
    }
    console.log(cartItems);
}

// Appel de la fonction au chargement de la page.
loadCartNumbers();
afficherCart(); 