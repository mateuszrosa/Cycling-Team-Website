document.addEventListener('DOMContentLoaded', function(){

  let prev = document.querySelector('.left button');
  let next = document.querySelector('.right button');
  let lis = document.querySelectorAll('#fourth li');
  let img = document.querySelectorAll('#fourth img');
  let info = document.querySelectorAll('#fourth .info');

  for(let i=0; i<img.length; i++) {
    img[i].addEventListener('click', function() {
      if(info[i].style.display === 'block') {
        info[i].style.display = 'none';
      } else {
        info[i].style.display = 'block';
      }
    })
  }


  let index = 0;

lis[0].classList.add('visible');

  prev.addEventListener('click', function() {
    console.log('click');
  lis[index].classList.remove('visible');
  index--;
  if(index < 0) {
    index =  lis.length -1;
  }
  for(let i=0; i<info.length; i++) {
    info[i].style.display = 'none';
  }
  lis[index].classList.add('visible');
  })

  next.addEventListener('click', function() {
    console.log('click');
  lis[index].classList.remove('visible');
  index++;
  if(index > lis.length - 1) {
    index = 0;
  }
  for(let i=0; i<info.length; i++) {
    info[i].style.display = 'none';
  }
  lis[index].classList.add('visible');
})

let images = document.querySelectorAll('#second .infos')
let news = document.querySelectorAll('#second .text');


  for(let i=0; i<images.length; i++) {
    images[i].addEventListener('click', function() {
      console.log('click');
        if(news[i].style.display === 'block') {
          news[i].style.display = 'none';
        } else {
          news[i].style.display = 'block';
        }

    })
  }

  let textarea = document.querySelector('textarea');
  let name = document.querySelector('input');
  let surname = document.querySelector('input:nth-of-type(2)');
  let email = document.querySelector('input:nth-of-type(3)');
  let submit = document.querySelector('input:last-of-type');

  submit.addEventListener('click', function(event) {
    if(textarea.value.length == 0) {
      alert('Wpisz wiadomość');
    } else if(name.value.length == 0) {
      alert('Wpisz imię');
    } else if(surname.value.length == 0) {
      alert('Wpisz nazwisko');
    } else if(email.value.indexOf("@") == -1) {
      alert('Email musi zawierać znak @');
    } else if(email.value.length == 0) {
      alert('Wpisz email');
    } else {
      textarea.value = '';
      name.value = '';
      surname.value = '';
      email.value = '';
      alert('Wiadomość została wysłana');
    }
  })

    $(document).ready(function(){
      $('.hamburger').click(function(){
        $('#mobilemenu').slideToggle();
      })
  })

})
