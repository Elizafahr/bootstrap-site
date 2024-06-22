//Для изменения количества в списке товаров на главной странице

$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var price = parseInt($this.closest('.item').find('.total-price').data('price'));
    if (value >= 1) {
        value = value - 1;
        var newPrice = price * value;
        $this.closest('.item').find('.total-price').html('$' + newPrice);
    } 
    else {
        value = 0;
        $this.closest('.item').find('.total-price').html('$' + 0);
    
    }
    $input.val(value);
});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var price = parseInt($this.closest('.item').find('.total-price').data('price'));

    if (value < 100) {
        value = value + 1;
        var newPrice = price * value;
        $this.closest('.item').find('.total-price').html('$' + newPrice);
    } else {
        value = 100;
    }

    $input.val(value);
});


$('.like-btn').on('click', function () {
    $(this).toggleClass('is-active');
});


 // КОРЗИНА
 const cartItems = document.querySelectorAll('.item');
 const plusButtons = document.querySelectorAll('.plus-btn');
 const minusButtons = document.querySelectorAll('.minus-btn');
 const deleteButtons = document.querySelectorAll('.delete-btn');
 const orderButton = document.querySelector('#orderButton');
 const orderModal = document.getElementById('orderModal');
 const orderModalInstance = new bootstrap.Modal(orderModal);

 // Function to update the total price of an item
 function updateItemPrice(item) {
   const quantity = parseInt(item.querySelector('input').value);
   const pricePerItem = parseFloat(item.querySelector('.total-price').dataset.price);
   const totalPrice = quantity * pricePerItem;
   item.querySelector('.total-price').textContent = `${totalPrice.toFixed(2)}р`;
 }

 // Event listeners for the plus and minus buttons
 plusButtons.forEach((button, index) => {
   button.addEventListener('click', () => {
     const item = cartItems[index];
     const input = item.querySelector('input');
     input.value = parseInt(input.value) + 1;
     updateItemPrice(item);
   });
 });

 minusButtons.forEach((button, index) => {
   button.addEventListener('click', () => {
     const item = cartItems[index];
     const input = item.querySelector('input');
     if (parseInt(input.value) > 1) {
       input.value = parseInt(input.value) - 1;
       updateItemPrice(item);
     }
   });
 });

 // Event listener for the delete buttons
 deleteButtons.forEach((button, index) => {
   button.addEventListener('click', () => {
     const item = cartItems[index];
     item.remove();
   });
 });

 // Event listener for the order button
 orderButton.addEventListener('click', () => {
   // Clear the cart
   cartItems.forEach(item => item.remove());

   // Show the modal window
   orderModalInstance.show();
 });