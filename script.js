const title = document.querySelector('.js-title');
const userName=document.querySelector('.js-username');
console.log(userName.value);
console.log(title.textContent)
title.textContent = `Hello ${userName.value}`;