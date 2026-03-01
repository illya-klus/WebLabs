import { getAllProducts } from "../interfaces/products";



function createDiscountPart (discount) {
    let discountDiv = document.createElement('div');
    discountDiv.classList.add("rate_discount_panel");

    let discountP = document.createElement('p');
    discountP.classList.add("discount");
    discountP.textContent = discount;

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

    return descriptionDiv.append(descriptionH3, descriptionP);
}

function createcoastAndAddPart(price, currency) {
    let coastAndAddButton = document.createElement('div');
    coastAndAddButton.classList.add("cost_add_btn");

    let p = document.createElement('p');
    p.textContent = ""+ price + " " + currency;

    let button = document.createElement('button');
    button.textContent = "Додати до кошика";

    return coastAndAddButton.append(p, button);
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
    let stockSpan = document.createElement('span').textContent(`Залишилось ${stock} на складі`);
    let coastAndAddButton = createcoastAndAddPart(price, currency);

    let discountDiv;
    if(discount){
        discountDiv = createDiscountPart(discount);
        return itemDiv.append(discountDiv, imageDiv, descriptionDiv, stockSpan, coastAndAddButton)
    }

    return itemDiv.append(imageDiv, descriptionDiv, stockSpan, coastAndAddButton)
}

export const downloadProducts = (parentConteiner) => {
    const products = getAllProducts();

    if(!products){
        parentConteiner.append(document.createElement('p').textContent('Корзина порожня'));
        return;
    }

    for(staff of products)
        parentConteiner.append(generateCard(staff));

}







