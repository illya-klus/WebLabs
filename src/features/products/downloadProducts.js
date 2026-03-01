import { getAllProducts } from "../../interfaces/products.js";
import { addToCart } from '../../interfaces/cart.js';



function createDiscountPart (discount) {
    let discountDiv = document.createElement('div');
    discountDiv.classList.add("rate_discount_panel");

    let discountP = document.createElement('p');
    discountP.classList.add("discount");
    discountP.textContent = "" + discount + "%";

    discountDiv.append(discountP);

    return discountDiv;
}

function createImagePart (image) {
    let imageDiv = document.createElement('div');
    imageDiv.classList.add("product_image_conteiner");

    let elementImg = document.createElement('img');
    elementImg.setAttribute('src', image);

    imageDiv.append(elementImg);

    return imageDiv;
}

function createDescriptionPart(brand, title){
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("product_decription");

    let descriptionH3 = document.createElement('h3');
    descriptionH3.textContent = brand;

    let descriptionP = document.createElement('p');
    descriptionP.textContent = title;

    descriptionDiv.append(descriptionH3, descriptionP);
    return descriptionDiv;
}

function createcoastAndAddPart(card) {
    let coastAndAddButton = document.createElement('div');
    coastAndAddButton.classList.add("cost_add_btn");

    let p = document.createElement('p');
    p.textContent = ""+ card.price + " " + card.currency;

    let button = document.createElement('button');
    button.textContent = "Додати";

    button.addEventListener('click', () => {
        addToCart(card);
    });

    coastAndAddButton.append(p, button);
    return coastAndAddButton
}

const generateCard = (card) => {
    const {
        id, 
        brand, 
        title, 
        description, 
        price, 
        discount, 
        stock, 
        currency, 
        image
    } = card;

    let itemDiv = document.createElement('div');
    itemDiv.classList.add('product_item');

    let imageDiv = createImagePart(image);
    let descriptionDiv = createDescriptionPart(brand, title+" "+description);
    let stockSpan = document.createElement('span');
    stockSpan.textContent = `Залишилось ${stock} на складі`;
    let coastAndAddButton = createcoastAndAddPart(card);

    let discountDiv;
    if(discount){
        discountDiv = createDiscountPart(discount);
        itemDiv.append(discountDiv, imageDiv, descriptionDiv, stockSpan, coastAndAddButton)
        return itemDiv;
    }

    itemDiv.append(imageDiv, descriptionDiv, stockSpan, coastAndAddButton);
    return itemDiv;
}

const downloadProducts = (parentConteiner) => {
    const products = getAllProducts();

    if(!products || products.length === 0){
        let p = document.createElement('p');
        parentConteiner.textContent = 'Корзина порожня';
        parentConteiner.append(p);

        return;
    }

    for(let staff of products)
        parentConteiner.append(generateCard(staff));

}

const downloadProductsDecorator = (func, delay) =>{
    let cachedResult = null;
    const timeMark = setInterval(() => cachedResult = null, delay);

    return function(parentConteiner){
        if(cachedResult)
            return cachedResult;
        
        let newResult = func(parentConteiner);
        cachedResult = newResult;

        return newResult;
    }
}

export default downloadProductsDecorator(downloadProducts, 30*60*60*1000);







