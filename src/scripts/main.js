import downloadProducts from '../features/products/downloadProducts.js';

const loadHTML = async (id, file) => {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    return document.getElementById(id);
}


loadHTML('header', '../src/features/header/header.html');

loadHTML('main', '../src/features/products/products.html')

loadHTML('footer', '../src/features/footer/footer.html');


async function handleRoute() {
  const route = window.location.hash;

  switch (route) {
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
        await loadHTML('profile_add_info','../src/features/profile/profile_selected/profile-selected.html');
        break

    default:
        const mainEl = await loadHTML('main','../src/features/products/products.html');

        let div = document.getElementById('products_container');
        downloadProducts(div);

  }
}


handleRoute();

window.addEventListener('hashchange', handleRoute)