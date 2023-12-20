// Récupération d'élements du dom de la class add-cart
let carts = document.querySelectorAll('.add-cart');

// Declaration et initialisation d'un tableau contenant les menus
let products = [
    {
        "name": "KOKI",
        "image":"/images/Koki-1.jpg",
        "price": 19.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "name": "NDOLE",
        "image":"/images/ndole.webp",
        "price": 22.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "name": "BEIGNETS AUX HARICOTS",
        "image":"/images/Beignet-Haricot.jpg",
        "price": 11.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "id": 4,
        "name": "EGUSI",
        "image":"/images/Egusi-Puddingjpg.jpg",
        "price": 19.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "name": "FUFU ET ERU",
        "image":"/images/Fufu-and-Eru.jpg",
        "price": 16.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "name": "SOUPE AUX PINOTTES",
        "image":"/images/Groundnut-Soup.jpg",
        "price": 11.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "name": "POULET DG",
        "image":"/images/poulet-dg.jpeg",
        "price": 25.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    },
    {
        "name": "POISSON BRAISÉ",
        "image":"/images/poisson-braisé.jpeg",
        "price": 22.00,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste."
    }
]

/** procédure qui compte le nombre d'item dans le panier à chaque evenement click sur .add-cart element*/
for(let i=0;i < carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers();
    })
}
/** Methode qui compte le nombre d'item ajouter au panier */
function cartNumbers(){

    let productNumbers = localStorage.getItem('cartCount'); // récupérer l'objet stocké dans localStorage
    console.log(productNumbers);
    console.log(typeof productNumbers);

    productNumbers  = parseInt(productNumbers);
    console.log(productNumbers);
    console.log(typeof productNumbers);
    localStorage.setItem('cartCount', 1); // enregistre les element click dans localStorage

}
