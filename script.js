const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}%`
// поднимаем sidebar-блок вверх, чтобы его ПОСЛЕДНИЙ градиентный фон (желтый) оказался рядом с ПЕРВЫМ слайдом (желтым)

let activeSlideIndex = 0
// вводим индексы для слайдов, текущий первый желтый слайд — под нулевым индексом

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction) {
  switch (direction) {
    case 'up':
      activeSlideIndex++
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0
        // если слайд последний — обнуляем индекс, т.е. показываем самую первую картинку
      }
      break
      
    case 'down':
      activeSlideIndex--
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1
        // если мы на первом слайде и кликаем «вниз», то переходим на последний слайд
      }
  }
  
  // двигаем sidebar вниз по вертикали
  sidebar.style.transform = `translateY(${activeSlideIndex * 100}%)`
  // а mainSlide — поднимаем вверх
  mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`
}