
  
//фильтрация товаров
  const filterBtn = document.querySelector('.filter-btn')
  const priceInput = document.querySelector('.price-input')
  const durationInput = document.querySelector('.duration-input')
  const posts = document.querySelectorAll('.post')

  filterBtn.addEventListener('click', () => {
      filtration();
  })


  priceInput.addEventListener('change', () => {
      filtration();
  })

  const categoryRadios = Array.from(document.getElementsByClassName('category'))

  // Обходим все радиокнопки и находим выбранную
  let activeCategory = 'All' // По умолчанию активна опция "All"
  categoryRadios.forEach(radio => {
      radio.addEventListener('change', () => {
          if (radio.checked) {
              activeCategory = radio.value
          }
          if (priceInput.value != "" && durationInput.value != "") {
              filtration();
          }
          //
          // alert(activeCategory)
      })
  })
  function filtration() {
      const priceValue = parseInt(priceInput.value)
      const durationValue = parseInt(durationInput.value)

      posts.forEach(post => {
          const price = parseInt(
              post.querySelector('.tour-price').getAttribute('price-value')
          )
          const duration = parseInt(
              post
                  .querySelector('.main-tour-bottom-info-conseasoneds-time')
                  .getAttribute('value')
          )
          const category = post.getAttribute('category')

          if (
              (activeCategory === 'All' || category === activeCategory) &&
              price <= priceValue &&
              duration <= durationValue
          ) {
              post.style.display = 'block'
          } else {
              post.style.display = 'none'
          }
      })

  }



  //rewiews

  const slider = document.querySelector(".items");
  const slides = document.querySelectorAll(".item");
  const button = document.querySelectorAll(".button");

  let current = 0;
  let prev = 4;
  let next = 1;

  for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
  }

  const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

  const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

  const gotoNum = number => {
      current = number;
      prev = current - 1;
      next = current + 1;

      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          slides[i].classList.remove("prev");
          slides[i].classList.remove("next");
      }

      if (next == 5) {
          next = 0;
      }

      if (prev == -1) {
          prev = 4;
      }

      slides[current].classList.add("active");
      slides[prev].classList.add("prev");
      slides[next].classList.add("next");
  }

  function searchFunction() {

      // Получаем значение из поля ввода
      var input = document.getElementById("searchInput");
      var filter = input.value.toUpperCase();

      // Получаем все элементы на странице, которые нужно проверить на соответствие
      var elements = document.getElementsByClassName('p');

      // Проходим по каждому элементу и скрываем те, которые не соответствуют поисковому запросу
      for (var i = 0; i < elements.length; i++) {
          var text = elements[i].textConseasoneds.toUpperCase();
          if (text.indexOf(filter) > -1) {
              elements[i].style.display = "";
          } else {
              elements[i].style.display = "none";
          }
      }
  }





  //валидация формы
  $(document).ready(function() {
                   
    // При отправке формы
    $("#contactForm").submit(function(event) {
         let error = 0;
      event.preventDefault(); // Отменить стандартное поведение отправки формы
      
      var name = $("#name").val().trim();
      var email = $("#email").val().trim();
      var subject = $("#subject").val().trim();
      var message = $("#message").val().trim();
      
      
      // Проверка полей формы
      if (name === "") {
        $("#name").addClass("is-invalid");
        error++;
        return;
      }
      if (email === "") {
        $("#email").addClass("is-invalid");
        error++;
        return;
      }
      if (!validateEmail(email)) {
        $("#email").addClass("is-invalid");
        return;
      }
      if (subject === "") {
        $("#subject").addClass("is-invalid");
        return;
      }
      if (message === "") {
        $("#message").addClass("is-invalid");
        error++;
        return;
      }
       if(error>0){
        alert("введите все поля")
      }
      // Если все поля заполнены, отправить форму
      // Здесь вы можете добавить свой код для отправки формы через AJAX или использовать сервис отправки формы по вашему выбору
      
      // Удаление класса "is-invalid" для всех полей формы, если отправка успешна
      $(".form-control").removeClass("is-invalid");
      
      // Отображение сообщения об успешной отправке
      $("#form-message-warning").hide();
      $("#form-message-success").show();
     
    });
  
    // Удаление класса "is-invalid" при изменении значения в поле формы
    $(".form-control").change(function() {
      $(this).removeClass("is-invalid");
    });
    
    // Функция для валидации электронной почты
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  


