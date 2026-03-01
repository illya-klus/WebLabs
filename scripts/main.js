import downloadProducts from './downloadProducts.js';

const loadHTML = async (id, file) => {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    return document.getElementById(id);
}


loadHTML('header', '../partials/header.html');

loadHTML('main', '../partials/products.html')

loadHTML('footer', '../partials/footer.html');


async function handleRoute() {
  const route = window.location.hash;

  switch (route) {
    case '#discounts':
        await loadHTML('main','partials/discounts.html');
        break

    case '#profile':
        await loadHTML('main','partials/profile.html');
        break

    case '#about_us':
        await loadHTML('main','partials/about_us.html');
        break

    case '#profile-history':
        await loadHTML('profile_add_info','partials/profile_history.html');
        break
    
    case '#profile-selected':
        await loadHTML('profile_add_info','partials/profile-selected.html');
        break

    default:
        const mainEl = await loadHTML('main','partials/products.html');

        let div = document.getElementById('products_container');
        downloadProducts(div);

  }
}


handleRoute();

window.addEventListener('hashchange', handleRoute)