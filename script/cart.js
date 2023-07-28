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