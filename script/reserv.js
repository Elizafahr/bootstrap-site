
const addButton = document.querySelector('.cart-add-btn')
addButton.addEventListener('click', addToCart)
function addToCart (event) {
  // Отменяем стандартное поведение кнопки
  event.preventDefault()

  // Получаем родительский элемент карточки
  const card = event.target.closest('.card')

  // Получаем данные карточки
  const title = card.querySelector('.card-title').textContent
  const price = card.querySelector('.card-price').textContent

  // Создаем объект товара
  const item = {
    title: title,
    price: price
  }

  // Добавляем товар в корзину
  addToCartItems(item)
}
function addToCartItems (item) {
  // Получаем массив товаров в корзине из localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

  // Проверяем, есть ли уже такой товар в корзине
  const existingItem = cartItems.find(cartItem => cartItem.title === item.title)

  if (existingItem) {
    // Если товар уже есть в корзине, увеличиваем его количество на 1
    existingItem.quantity += 1
  } else {
    // Если товара еще нет в корзине, добавляем его
    item.quantity = 1
    cartItems.push(item)
  }

  // Сохраняем обновленный массив товаров в корзине в localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
function updateCartCount () {
  // Получаем количество товаров в корзине из localStorage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

  // Обновляем отображение количества товаров в корзине на иконке корзины
  const cartCount = document.querySelector('.cart-count')
  cartCount.textContent = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )
}
var cartCountt = 5;
updateCartCount(cartCountt);
function addToCart (event) {
  // Отменяем стандартное поведение кнопки
  event.preventDefault()

  // Получаем родительский элемент карточки
  const card = event.target.closest('.card')

  // Получаем данные карточки
  const title = card.querySelector('.card-title').textContent
  const price = card.querySelector('.card-price').textContent

  // Создаем объект товара
  const item = {
    title: title,
    price: price
  }

  // Добавляем товар в корзину
  addToCartItems(item)

  // Обновляем отображение количества товаров в корзине на иконке корзины
  updateCartCount()
}
