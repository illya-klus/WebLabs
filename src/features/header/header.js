export const createMenu = () => {
    const menuBtn = document.getElementById('menu_btn');
    if (!menuBtn) return;

    const menu = document.createElement('div');
    menu.className = 'menu_navigation_container offVisibility';

    const menuItems = [
        { href: '#products', img: '../../images/menu/woman-clothes.png' },
        { href: '#discounts', img: '../../images/menu/descuento.png' },
        { href: '#profile', img: '../../images/menu/profile.png' },
        { href: '#about_us', img: '../../images/menu/contact-us.png' },
    ];

    menuItems.forEach(({ href, img }) => {
        const a = document.createElement('a');
        a.href = href;

        const image = document.createElement('img');
        image.src = img;

        a.append(image);
        menu.append(a);
    });

    menuBtn.append(menu);

    // toggle
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('offVisibility');
    });

    const menuLinks = document.querySelectorAll('.menu_navigation_container a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

};