// Récupération d'élements du dom de la class add-cart
//let carts = document.querySelectorAll('.add-cart');

/**
 * procédure qui compte le nombre d'item dans le panier 
 * à chaque evenement click sur .add-cart element
 */
/*for(let i=0;i < carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]); // Appel de la fonction cartNumbers auquel on passe un argument product[i]
        totalCost(products[i]); // Appel de la fonction totalCost(calcul le cout total panier)
    })
}*/

document.addEventListener('click', function (event) {
    // Vérifie si l'élément cliqué est un bouton d'ajout dans le panier
    if (event.target.classList.contains('add-cart')) {
        // Obtient l'indice de l'élément cliqué
        let index = Array.from(document.querySelectorAll('.add-cart')).indexOf(event.target);
        
        // Appel des fonctions cartNumbers et totalCost avec l'indice
        cartNumbers(products[index]); // Appel de la fonction cartNumbers auquel on passe un argument product[i]
        totalCost(products[index]); // Appel de la fonction totalCost(calcul le cout total panier)    
    }
});

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
                            <button class="btn btn-moins" type="button">&minus;</button>
                        </div>
                        <span class="mx-1">${item.inCart}</span>
                        <div class="input-group-append">
                            <button class="btn btn-plus" type="button">&plus;</button>
                        </div>
                    </div>
                </td>
                <td>${item.price * item.inCart}</td>
                <td><button class="btn btn-delete" type="button">&times</button></td>
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
}

// =========== AJOUT EVENEMENENTS =========
document.addEventListener('click', function (event) {
    // Vérifie si l'élément cliqué est un bouton d'ajout
    if (event.target.classList.contains('btn-plus')) {
        // Obtient l'indice de l'élément cliqué
        let index = Array.from(document.querySelectorAll('.btn-plus')).indexOf(event.target);
        
        // Appel de la fonction AjoutQuantite avec l'indice
        AjoutQuantite(index);
    }
    // Vérifie si l'élément cliqué est un bouton de reduction
    if (event.target.classList.contains('btn-moins')) {
        // Obtient l'indice de l'élément cliqué
        let index = Array.from(document.querySelectorAll('.btn-moins')).indexOf(event.target);
        
        // Appel de la fonction reduireQuantite avec l'indice
        reduireQuantite(index);
    }
    // Vérifie si l'élément cliqué est un bouton de suppression
    if (event.target.classList.contains('btn-delete')) {
        // Obtient l'indice de l'élément cliqué
        let index = Array.from(document.querySelectorAll('.btn-delete')).indexOf(event.target);
        
        // Appel de la fonction deleteItemInCart avec l'indice
        deleteItemInCart(index);
    }
    // Vérifie si l'élément cliqué est le bouton commander
    if (event.target.classList.contains('btn-commander')) {
        // Obtient l'indice de l'élément cliqué
        let index = Array.from(document.querySelectorAll('.btn-commander')).indexOf(event.target);
        
        // Appel de la fonction reinitialiserLocalStorage avec l'indice
        reinitialiserLocalStorage();
    }
});

// =========== FONCTION DE GESTION D'EVENEMENENTS =========
function deleteItemInCart(index){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems)
    // Vérifie si le panier existe dans le localStorage
    if (cartItems) {
        // Convertit les clés de l'objet cartItems en un tableau
        let keys = Object.keys(cartItems);

        // Obtient la clé correspondant à l'index spécifié
        let keyToDelete = keys[index];

        // Obtient la quantité d'éléments supprimés pour mettre à jour cartNumbers
        let deletedQuantity = cartItems[keyToDelete].inCart;

        // Met à jour totalCost
        let cartCost = localStorage.getItem("totalCost");
        cartCost = parseInt(cartCost);
        if (!isNaN(cartCost) && cartCost >= 0) {
            localStorage.setItem("totalCost", cartCost - (cartItems[keyToDelete].price * deletedQuantity));
        }

        // Met à jour cartNumbers
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (!isNaN(productNumbers) && productNumbers >= deletedQuantity) {
            localStorage.setItem('cartNumbers', productNumbers - deletedQuantity);
            loadCartNumbers(); // Met à jour l'affichage du nombre d'articles dans le panier
        }

        // Supprime l'élément du panier
        delete cartItems[keyToDelete];

        // Met à jour le localStorage avec le nouveau panier
        localStorage.setItem("productsInCart", JSON.stringify(cartItems)); 
               
        // Met à jour l'affichage du panier
        afficherCart()
    }
}

// Fonction pour augmenter la quantité d'un élément dans le panier
function AjoutQuantite(index) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    // Vérifie si le panier existe dans le localStorage
    if (cartItems) {
        // Convertit les clés de l'objet cartItems en un tableau
        let keys = Object.keys(cartItems);

        // Obtient la clé correspondant à l'index spécifié
        let keyToIncrease = keys[index];

        // Augmente la quantité de l'élément dans le panier
        cartItems[keyToIncrease].inCart += 1;

        // Met à jour le localStorage avec la nouvelle quantité
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));

        // Met à jour cartNumbers
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (!isNaN(productNumbers)) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            loadCartNumbers(); // Met à jour l'affichage du nombre d'articles dans le panier
        }

        // Met à jour totalCost
        let cartCost = localStorage.getItem("totalCost");
        cartCost = parseInt(cartCost);
        if (!isNaN(cartCost) && cartCost >= 0) {
            localStorage.setItem("totalCost", cartCost + cartItems[keyToIncrease].price);
        }

        // Met à jour l'affichage du panier
        afficherCart();
    }
}

// Fonction pour réduire la quantité d'un élément dans le panier
function reduireQuantite(index) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    // Vérifie si le panier existe dans le localStorage
    if (cartItems) {
        // Convertit les clés de l'objet cartItems en un tableau
        let keys = Object.keys(cartItems);

        // Obtient la clé correspondant à l'index spécifié
        let keyToDecrease = keys[index];

        // Réduit la quantité de l'élément dans le panier (avec une limite minimale de 1)
        cartItems[keyToDecrease].inCart = Math.max(1, cartItems[keyToDecrease].inCart - 1);

        // Met à jour le localStorage avec la nouvelle quantité
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));

        // Met à jour cartNumbers
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (!isNaN(productNumbers) && productNumbers >= 1) {
            localStorage.setItem('cartNumbers', productNumbers - 1);
            loadCartNumbers(); // Met à jour l'affichage du nombre d'articles dans le panier
        }

        // Met à jour totalCost
        let cartCost = localStorage.getItem("totalCost");
        cartCost = parseInt(cartCost);
        if (!isNaN(cartCost) && cartCost >= cartItems[keyToDecrease].price) {
            localStorage.setItem("totalCost", cartCost - cartItems[keyToDecrease].price);
        }

        // Met à jour l'affichage du panier
        afficherCart();
    }
}

// Fonction permettant d'afficher le recap du panier
function afficherRecapitulatif() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems)
    let recapContainer = document.querySelector(".recap-container");

    if (cartItems && recapContainer) {
        recapContainer.innerHTML = ''; // Réinitialise le contenu

        let sousTotal = 0;

        Object.values(cartItems).forEach(item => {
            recapContainer.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price.toFixed(2)} $</td>
                    <td>${item.inCart}</td>
                    <td>${(item.price * item.inCart).toFixed(2)} $</td>
                </tr>
            `;
            sousTotal += item.price * item.inCart;
        });

        // Ajoute les lignes pour le sous-total, TPS, TVQ et total
        recapContainer.innerHTML += `
            <tr>
                <td colspan="3" class="text-black font-weight-bold">
                    <strong>SOUS-TOTAL</strong>
                </td>
                <td>${sousTotal.toFixed(2)} $</td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>TPS</strong>
                </td>
                <td>${(sousTotal * 0.05).toFixed(2)} $</td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>TVQ</strong>
                </td>
                <td>${(sousTotal * 0.09975).toFixed(2)} $</td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>TOTAL</strong>
                </td>
                <td>${(sousTotal + sousTotal * 0.05 + sousTotal * 0.09975).toFixed(2)} $</td>
            </tr>
        `;
    }
}

// Vider les elements du localStorage
function reinitialiserLocalStorage() {
    localStorage.clear();
}

// Appel de la fonction au chargement de la page.
loadCartNumbers();
afficherCart();
afficherRecapitulatif();