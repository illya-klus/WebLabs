const loadHTML = (id, file) => {
    fetch(file)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html)
}


loadHTML('header', '../partials/header.html');

loadHTML('main', '../partials/products.html')

loadHTML('footer', '../partials/footer.html');


function handleRoute() {
  const route = window.location.hash;

  switch (route) {
    case '#discounts':
        loadHTML('main','partials/discounts.html')
        break

    case '#profile':
        loadHTML('main','partials/profile.html')
        break

    case '#about_us':
        loadHTML('main','partials/about_us.html')
        break

    case '#profile-history':
        loadHTML('profile_add_info','partials/profile_history.html')
        break
    
    case '#profile-selected':
        loadHTML('profile_add_info','partials/profile-selected.html')
        break

    default:
        loadHTML('main','partials/products.html')
  }
}


handleRoute();

window.addEventListener('hashchange', handleRoute)