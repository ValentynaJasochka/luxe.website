const title = document.querySelector(".js-title");
const userName = document.querySelector(".js-username");
const comment = document.querySelector(".js-comment");
const list = document.querySelector(".js-list");

title.textContent = `Hello ${userName.value}`;

if (!!userName.value) {
  title.textContent = title.textContent.toUpperCase();
  title.classList.add("title-color");
  comment.hidden = true;
} else {
  title.textContent = `Write your Name`;
  title.classList.remove("title-color");
  comment.hidden = false;
}

const li = document.createElement("li");

list.appendChild(li);

const goods = [...list.children];

goods.forEach((good) => {
  good.textContent = `tomato`;
  good.classList.add('item')
});
