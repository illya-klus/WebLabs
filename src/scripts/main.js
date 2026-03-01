import downloadProducts from '../features/products/downloadProducts.js';
import { createMenu } from '../features/header/header.js';
import { initAuth } from '../features/auth/auth.js';
import {renderCart} from '../features/cart/cart.js';
import { updateClearCartState } from '../features/cart/cart.js';
import { getAllProducts } from '../interfaces/products.js';
import { renderProductDetail } from '../features/item_page/renderProductDetails.js';


const loadHTML = async (id, file) => {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    return document.getElementById(id);
}

async function initialize(){
    await loadHTML('header', '../src/features/header/header.html');
    createMenu();

    await loadHTML('main', '../src/features/products/products.html')

    await loadHTML('footer', '../src/features/footer/footer.html');
}



async function handleRoute() {
    const route = window.location.hash;

    if(route.startsWith('#product-')){
        const id = Number(route.replace('#product-', ''));
        const product = getAllProducts().find(p => p.id === id);
        if(product) renderProductDetail(product);
        return;
    }

    switch (route) {
        case '#cart':
            await loadHTML('main', '../src/features/cart/cart.html');
            renderCart();
            updateClearCartState();
            break;
  
        case '#login':
            await loadHTML('main', '../src/features/auth/login.html');
            initAuth();
            break;
  
        case '#register':
            await loadHTML('main', '../src/features/auth/register.html');
            initAuth();
            break;
        
        case '#discounts':
            await loadHTML('main','../src/features/discount/discounts.html');
            break
  
        case '#profile':
            await loadHTML('main','../src/features/profile/profile.html');
            break
  
        case '#about_us':
            await loadHTML('main','../src/features/about_us/about_us.html');
            break
  
        case '#profile-history':
            await loadHTML('profile_add_info','../src/features/profile/profile_history/profile_history.html');
            break
      
        case '#profile-selected':
            await loadHTML('profile_add_info','../src/features/cart/cart.html');
            renderCart();
            updateClearCartState();
            break
  
        default:
            const mainEl = await loadHTML('main','../src/features/products/products.html');
  
            let div = document.getElementById('products_container');
            downloadProducts(div);
  
    }
}  
  
initialize();
handleRoute();

window.addEventListener('hashchange', handleRoute)