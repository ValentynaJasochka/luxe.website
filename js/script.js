// import { cars } from "./cars";
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
  },
];
// import { galleryItems } from "./gallery-items";
// console.log(galleryItems[1]);
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  }
];
const selectors = {
  lodashSearch:document.querySelector(".js-lodash"),
  title: document.querySelector(".js-title"),
  comment: document.querySelector(".js-comment"),
  list: document.querySelector(".js-list"),
  carsList: document.querySelector(".js-cars-list"),
  carsForm: document.querySelector(".js-cars-form"),
  addBtn: document.querySelector(".js-add-btn"),
  subtractBtn: document.querySelector(".js-subtract-btn"),
  counter: document.querySelector(".js-counter"),
  form: document.querySelector(".js-form"),
  imgLoader: document.querySelector('.js-img-loader')
};
const {
  lodashSearch,
  title,
  comment,
  list,
  carsList,
  carsForm,
  addBtn,
  subtractBtn,
  counter,
  form,
  imgLoader,
} = selectors;
//Handler LodashSearch
// lodashSearch.addEventListener('input', _.throttle(handlerThrottleSearch, 3000, 
//   {leading: false, trailing: false}
// ))
// function handlerThrottleSearch(evt) {
// console.log(evt.target.value);
// }


lodashSearch.addEventListener('input', _.debounce(handlerDebounceSearch, 3000, 
  {leading: true, trailing: true}
))
function handlerDebounceSearch(evt) {
console.log(evt.target.value);
}

//Handle input - Name, email, phone. Greeting
form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { username, email, phone, city, street, age, car } =
    evt.currentTarget.elements;
  // const elements = Array.from(evt.currentTarget.elements);
  // const data = elements.reduce((acc, item)=>{
  //   if(isNaN(item.name)){
  //     acc[item.name]=item.value
  //   }
  //   return acc
  // },{})

  // elements with FormData
  const formData = new FormData(evt.currentTarget);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  createGreeting(username, email, phone, city, street, age, car);
}

// Creating HEADER
function createGreeting(name, mail, tel, city, street, age, car) {
  title.textContent = `Hello ${name.value}. Please check your email - ${mail.value} 
  and phone - ${tel.value}.You are ${age.value} years old,  live on ${street.value} in ${city.value} 
  and drives ${car.value}`;
  if (!!name.value) {
    title.classList.add("title-color");
    comment.hidden = true;
  } else {
    title.textContent = `Write your Name`;
    title.classList.remove("title-color");
    comment.hidden = false;
  }
}

// Copying forbidding
document.addEventListener("keydown", handlerCopyKey);
function handlerCopyKey(evt) {
  if (evt.ctrlKey && evt.code === "KeyC") {
    evt.preventDefault();
  }
}

//List creating
const li = document.createElement("li");

list.appendChild(li);

const goods = [...list.children];

goods.forEach((good) => {
  good.textContent = `tomato`;
  good.classList.add("item");
});
const listHeader = `<h2>${"Список покупок"}</h2>`;
list.insertAdjacentHTML("beforebegin", listHeader);
 

//List loading
const marKup = galleryItems.map(({preview, description}) => ` <li> <img src="${preview}" alt="${description}" width='400'></li>`).join();
imgLoader.insertAdjacentHTML("beforeend", marKup);
//CArs form and listStyle
carsList.insertAdjacentHTML("beforeend", createMarkup(cars));

carsForm.addEventListener("submit", handlerCarsForm);

function handlerCarsForm(evt) {
  evt.preventDefault();

  const {
    select: { value: selector },
    query: { value: query },
  } = evt.currentTarget.elements;
  const queryValue = query.toLowerCase();

  let resultCars = cars.filter((item) => {
    return item[selector].toLowerCase() == queryValue;
  });

  carsList.innerHTML = createMarkup(resultCars);
  
  evt.currentTarget.reset()
}

function createMarkup(dataArr) {
  let marKup = '';
  return   marKup = dataArr
    .map(
      ({ model, type, price, img }) => `
    <li>
    <img src="${img}" alt="${model}" width ='300'>
    <h2>Make: ${model}</h2>
    <h3>Model: ${type}</h3>
    <p>Price: ${price}</p>
  </li>`
    )
    .join("");
}

carsList.classList.add("cars-list");

// Add - Subtract -  Buttons
addBtn.addEventListener("click", handlerAdd);
subtractBtn.addEventListener("click", handlerSubtract);
let step = 0;
function handlerAdd() {
  step += 1;
  counter.textContent = step;
}
function handlerSubtract() {
  step -= 1;
  counter.textContent = step;
}
