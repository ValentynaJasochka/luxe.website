const title = document.querySelector('.js-title');
const userName=document.querySelector('.js-username');
console.log(!!userName.value);

title.textContent = `Hello ${userName.value}`;
console.log(title.textContent)
if (!!userName.value) {
  console.log(title.textContent.toUpperCase());
  title.textContent=title.textContent.toUpperCase()
  title.classList.add("title-color")
}
else{
  title.textContent = `Write your Name`;
  title.classList.remove("title-color")
}

