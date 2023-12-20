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
 * fonction qui va compter le nombre d'item ajouter au panier sous conditions.
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
// Appel de la fonction au chargement de la page.
loadCartNumbers() 