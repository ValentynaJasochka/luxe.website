const cars = [
  {
    model: "BMW",
    type: "5 series",
    price: 24300,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Honda",
    type: "Civic",
    price: 7800,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 16000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "BMW",
    type: "5 series",
    price: 14500,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 22500,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Honda",
    type: "C40",
    price: 19500,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Mini",
    type: "Cupper",
    price: 12000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "BMW",
    type: "Sport",
    price: 8000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    model: "Volvo",
    type: "Accord",
    price: 20000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  }
];
const selectors = {
  title: document.querySelector(".js-title"),
  comment: document.querySelector(".js-comment"),
  list: document.querySelector(".js-list"),
  carsList: document.querySelector('.js-cars-list'),
  userName: document.querySelector(".js-username")
}
const {title, comment, list, carsList, userName} = selectors

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
  good.classList.add("item");
});
const listHeader = `<h2>${"Список покупок"}</h2>`;
list.insertAdjacentHTML("beforebegin", listHeader);
const marKup = cars.map(({model, type, price, img})=>`
  <li>
  <img src="${img}" alt="${model}" width ='300'>
  <h2>Make: ${model}</h2>
  <h3>Model: ${type}</h3>
  <p>Price: ${price}</p>
</li>`).join('')


carsList.insertAdjacentHTML("beforeend", marKup)
carsList.classList.add('cars-list')