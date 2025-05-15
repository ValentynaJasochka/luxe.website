const title = document.querySelector('.js-title');
const userName=document.querySelector('.js-username');
const comment =document.querySelector('.js-comment')
const list = document.querySelector('.js-list')
const goods = [...list.children]
console.log(goods);

title.textContent = `Hello ${userName.value}`;
console.log(title.textContent)
if (!!userName.value) {
  console.log(title.textContent.toUpperCase());
  title.textContent=title.textContent.toUpperCase()
  title.classList.add("title-color")
  comment.hidden = true;
  console.log(comment);

}
else{
  title.textContent = `Write your Name`;
  title.classList.remove("title-color");
  comment.hidden = false;
  console.log(comment);
}
 goods.forEach(good => {
  good.textContent = `tomato`
 });
