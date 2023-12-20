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
        cartNumbers();
    })
}
/**
 * fonction qui affiche le nombre d'item du panier dans 
 * l'icone panier si existe
 */
function loadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.count').textContent = productNumbers;
    }
};

/**
 * fonction qui va compter le nombre d'item ajouter au panier sous conditions.
 */
function cartNumbers(){
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
}
// Appel de la fonction au chargement de la page.
loadCartNumbers() 