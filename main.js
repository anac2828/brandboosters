const nav = document.querySelector('.nav');
const button = document.querySelector('.mobile-nav-toggle');

button.addEventListener('click', e => {
    
    let isExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false;
    
    button.setAttribute('aria-expanded', !isExpanded);
    nav.setAttribute('data-visible', !isExpanded);
})
