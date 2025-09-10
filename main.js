// HEADER TEMPLATE
// document.addEventListener('DOMContentLoaded', () => {
//   const nav = document.querySelector('.nav');
//   const button = document.querySelector('.mobile-nav-toggle');

//   button.addEventListener('click', (e) => {
//     let isExpanded =
//       button.getAttribute('aria-expanded') === 'true' ? true : false;

//     button.setAttribute('aria-expanded', !isExpanded);
//     nav.setAttribute('data-visible', !isExpanded);
//   });
// });
// **** NOT COMPLETLY WORKING ****
// HEADER TEMPLATE will be added to all pages
// const template = document.getElementById('header-template');
// const clone = document.importNode(template.content, true);
// document.body.prepend(clone);
//This codes needs to be after the template is added to the DOM
const nav = document.getElementsByClassName('nav');
const button = document.querySelector('.mobile-nav-toggle');

button.addEventListener('click', (e) => {
  let isExpanded =
    button.getAttribute('aria-expanded') === 'true' ? true : false;

  button.setAttribute('aria-expanded', !isExpanded);
  nav.setAttribute('data-visible', !isExpanded);
});
