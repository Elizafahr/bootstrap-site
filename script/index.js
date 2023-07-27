// document.getElementById('main-action-btn').onclick = function () {
//     document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
//   }
  
  //перенос по ссылкам в навигации
  let links = document.querySelectorAll('.nav-item > a')
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      document
        .getElementById(links[i].getAttribute('data-link'))
        .scrollIntoView({ behavior: 'smooth' })
    }
  }
  