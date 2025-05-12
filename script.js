import Inputmask from './node_modules/inputmask/dist/inputmask.es6.js';

let phone = document.querySelector('#contact-phone');
let email = document.querySelector('#contact-email');

Inputmask({ mask: '(99) [9]9999-9999' }).mask(phone);
Inputmask('email').mask(email);
