// let tab = document.querySelectorAll('.info-header-tab'),
//   info = document.querySelector('.info-header'),
//   tabContent = document.querySelectorAll('.info-tabcontent');


// событие загрузки DOM дерева запускает функцию выполнения программы табы
(function (tabItemLink, tabWrap, tabItemContent) {
  window.addEventListener('DOMContentLoaded', function () {

    //строгий режим

    'use strict';

    // скрытие контент блоков кроме первого 

    function hideTabContent(a) {
      for (let i = a; i < tabItemContent.length; i++) {
        tabItemContent[i].classList.remove('show');
        tabItemContent[i].classList.add('hide');
      }
    }

    hideTabContent(1);

    // отображение контента таб-блока  

    function showTabContent(b) {
      if (tabItemContent[b].classList.contains('hide')) {
        tabItemContent[b].classList.remove('hide');
        tabItemContent[b].classList.add('show');
      }
    }

    // делегирование событий для табов

    tabWrap.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tabItemLink.length; i++) {
          if (tabItemLink[i] == target) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  });
}(tab, info, tabContent));