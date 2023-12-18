import { data } from "./data.js";

const dataParse = JSON.parse(data);

const divElem = document.querySelector('.content');

dataParse.forEach(({id, brand, name, price, image_link, description, product_type, created_at}) => {

    const cardElem = document.createElement('div');
    cardElem.classList.add('card');
    divElem.appendChild(cardElem);

    const idElem = document.createElement('p');
    idElem.id = id;
    idElem.textContent = `Идентификатор товара: ${id}`;
    idElem.style.color = 'pink';
    cardElem.appendChild(idElem);

    const brandElem = document.createElement('p');
    brandElem.classList.add('brand');
    brandElem.brand = brand;
    brandElem.textContent = `Брэнд: ${brand}`;
    cardElem.appendChild(brandElem);

    const nameEl = document.createElement('p');
    nameEl.classList.add('name');
    nameEl.textContent = `Наименование товара: ${name}`;
    cardElem.appendChild(nameEl);

    const priceElem = document.createElement('p');
    priceElem.price = price;
    priceElem.textContent = `Стоимость товара: ${price}`;
    priceElem.classList.add('product_price');
    cardElem.appendChild(priceElem);

    const imgElem = document.createElement('img');
    imgElem.src = image_link;
    cardElem.appendChild(imgElem);

    const descElem = document.createElement('p');
    descElem.description = description;
    descElem.textContent = `Описание товара: ${description}`;
    descElem.classList.add('product_description');
    cardElem.appendChild(descElem);

    const typeElem = document.createElement('p');
    typeElem.product_type = product_type;
    typeElem.textContent = `Тип товара: ${product_type}`;
    typeElem.classList.add('product_type');
    cardElem.appendChild(typeElem);

    const dateElem = document.createElement('p');
    dateElem.created_at = created_at;
    dateElem.textContent = `Дата создания товара: ${created_at}`;
    dateElem.classList.add('product_date');
    cardElem.appendChild(dateElem);
})