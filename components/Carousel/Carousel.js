/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {

  let carouselAnchor = document.querySelector('.carousel-container')

  let carouselContainer = document.createElement('div')
  carouselContainer.classList.add('carousel')

  let carouselImages = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']
  
  let carouselLeftBtn = document.createElement('div')
  carouselLeftBtn.classList.add('left-button')
  carouselLeftBtn.textContent = ' < '
  let carouselImgContainer = document.createElement('img')
  carouselContainer.appendChild(carouselImgContainer)
  console.log(carouselContainer)
  let imgOn = 0

  for (i = 0; i <= carouselImages.length; i++) {
    carouselLeftBtn.addEventListener('click', e => {
        console.log(i)
        carouselImgContainer.src = carouselImages[imgOn-1]
        carouselImgContainer.style.display = 'block'

    })
  }

  let carouselRightBtn = document.createElement('div')
  carouselRightBtn.classList.add('right-button')
  carouselRightBtn.textContent = ' > '

  carouselAnchor.appendChild(carouselContainer)
  carouselContainer.appendChild(carouselLeftBtn)  
  carouselContainer.appendChild(carouselRightBtn)

  return carouselAnchor;
}

createCarousel();