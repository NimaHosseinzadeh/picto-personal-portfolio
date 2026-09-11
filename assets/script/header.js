// =========================
// Get Elements
// =========================

const headerNavbar      = document.getElementById('headerNavbar')
const headerMenu        = document.getElementById('headerMenu')
const headerToggleTheme = document.getElementById('headerToggleTheme')
const headerMenuIcon    = document.getElementById('headerMenuIcon')

// =========================
// Mobile Menu
// =========================

headerMenuIcon.addEventListener('click' , () => {
    headerNavbar.classList.toggle('show_menu')

    if(headerNavbar.classList.contains('show_menu')) {
        headerMenuIcon.classList.remove('ri-menu-line')
        headerMenuIcon.classList.add('ri-close-line')
    }else{
        headerMenuIcon.classList.add('ri-menu-line')
        headerMenuIcon.classList.remove('ri-close-line')
    }
})

// =========================
// Change Theme
// =========================

headerToggleTheme.addEventListener('click' , () => {
    document.body.classList.toggle('dark')

    if(document.body.classList.contains('dark')){
        headerToggleTheme.classList.remove('ri-moon-clear-line')
        headerToggleTheme.classList.add('ri-sun-line')
    }else{
        headerToggleTheme.classList.add('ri-moon-clear-line')
        headerToggleTheme.classList.remove('ri-sun-line')
    }
})

// =========================
// Create Menu Data
// =========================
const menu = [
    {id : 1 , title : 'Home'      , href: '#' , liClass : 'header__item' , linkClass: 'header__link'} ,
    {id : 2 , title : 'About'     , href: '#' , liClass : 'header__item' , linkClass: 'header__link'} ,
    {id : 3 , title : 'Process'   , href: '#' , liClass : 'header__item' , linkClass: 'header__link'} ,
    {id : 4 , title : 'Portfolio' , href: '#' , liClass : 'header__item' , linkClass: 'header__link'} ,
    {id : 5 , title : 'Blog'      , href: '#' , liClass : 'header__item' , linkClass: 'header__link'} ,
    {id : 6 , title : 'Services'  , href: '#' , liClass : 'header__item' , linkClass: 'header__link'} ,
]


// =========================
// Render Menu
// =========================

menu.forEach(item => headerMenu.innerHTML += `
    <li class="${item.liClass}">
        <a href="${item.href}" class="header__link">${item.title}</a>
    </li>
`)

