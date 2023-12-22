import { data } from "./data.js";

const dataParse = JSON.parse(data);

// const divElem = document.querySelector('.container');
// console.log(divElem);

// dataParse.forEach(({ id, brand, name, price, image_link, description, product_type, created_at }) => {

//     const cardElem = document.createElement('div');
//     cardElem.classList.add('card');
//     cardElem.style.display = 'inline-block';
//     cardElem.style.marginRight = '20px';
//     cardElem.style.width = 'auto';
//     cardElem.style.height = 'auto';
//     divElem.appendChild(cardElem);

//     const idElem = document.createElement('p');
//     idElem.classList.add('id');
//     idElem.textContent = `Идентификатор товара: ${id}`;
//     idElem.style.color = 'rgb(206, 67, 90)';
//     idElem.style.fontSize = '18px'
//     idElem.style.fontWeight = 'bold';
//     idElem.style.marginTop = '30px';
//     cardElem.appendChild(idElem);

//     const brandElem = document.createElement('p');
//     brandElem.classList.add('brand');
//     brandElem.textContent = `Брэнд: ${brand}`;
//     cardElem.appendChild(brandElem);

//     const nameElem = document.createElement('p');
//     nameElem.classList.add('name');
//     nameElem.textContent = `Наименование товара: ${name}`;
//     cardElem.appendChild(nameElem);

//     const priceElem = document.createElement('p');
//     priceElem.textContent = `Стоимость товара: ${price}`;
//     priceElem.classList.add('product_price');
//     cardElem.appendChild(priceElem);

//     const imgElem = document.createElement('img');
//     imgElem.src = image_link;
//     imgElem.style.height = '250px';
//     imgElem.style.maxWidth = '100%';
//     cardElem.appendChild(imgElem);

//     const descElem = document.createElement('p');
//     descElem.textContent = `Описание товара: ${description}`;
//     descElem.classList.add('product_description');
//     descElem.style.height = '130px';
//     descElem.style.width = '300px';
//     descElem.style.textAlign = 'left';
//     cardElem.appendChild(descElem);

//     const typeElem = document.createElement('p');
//     typeElem.textContent = `Тип товара: ${product_type}`;
//     typeElem.classList.add('product_type');
//     cardElem.appendChild(typeElem);

//     const dateElem = document.createElement('p');
//     dateElem.textContent = `Дата создания товара: ${created_at}`;
//     dateElem.classList.add('product_date');
//     cardElem.appendChild(dateElem);
// });


const divElem = document.querySelector('.container');

dataParse.forEach(({ id, brand, name, price, image_link, description, product_type, created_at }) => {

    const cardElem = document.createElement('div');
    cardElem.classList.add('card');
    cardElem.style.display = 'inline-block';
    cardElem.style.marginRight = '20px';
    cardElem.style.justifyContent = 'center',
    cardElem.style.alignItems = 'center';
    divElem.appendChild(cardElem);

    const idElem = document.createElement('p');
    idElem.classList.add('id');
    idElem.textContent = `Идентификатор товара: ${id}`;
    idElem.style.color = 'rgb(206, 67, 90)';
    idElem.style.fontSize = '18px'
    idElem.style.fontWeight = 'bold';
    idElem.style.marginTop = '30px';
    cardElem.appendChild(idElem);

    const brandElem = document.createElement('p');
    brandElem.classList.add('brand');
    brandElem.textContent = `Брэнд: ${brand}`;
    cardElem.appendChild(brandElem);

    const nameElem = document.createElement('p');
    nameElem.classList.add('name');
    nameElem.textContent = `Наименование товара: ${name}`;
    cardElem.appendChild(nameElem);

    const priceElem = document.createElement('p');
    priceElem.textContent = `Стоимость товара: ${price}`;
    priceElem.classList.add('product_price');
    cardElem.appendChild(priceElem);

    const imgElem = document.createElement('img');
    imgElem.src = image_link;
    imgElem.style.height = '250px';
    imgElem.style.maxWidth = '100%';
    cardElem.appendChild(imgElem);

    const descElem = document.createElement('p');
    descElem.textContent = `Описание товара: ${description}`;
    descElem.classList.add('product_description');
    descElem.style.height = '130px';
    descElem.style.width = '300px';
    descElem.style.textAlign = 'left';
    cardElem.appendChild(descElem);

    const typeElem = document.createElement('p');
    typeElem.textContent = `Тип товара: ${product_type}`;
    typeElem.classList.add('product_type');
    cardElem.appendChild(typeElem);

    const dateElem = document.createElement('p');
    dateElem.textContent = `Дата создания товара: ${created_at}`;
    dateElem.classList.add('product_date');
    cardElem.appendChild(dateElem);
});