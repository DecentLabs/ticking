// import drum from './assets/drum.svg'
import svgs from './svg.js'

function equalizerAnim () {
  let equalizer = document.querySelector('.equalizer')
  let style = document.createElement('style')

  let bars = []
  let barNums = 25

  let random = function (multi) {
    return (Math.random() * multi) + 'px'
  }

  for (let i=0; i < barNums; i++) {
    let bar = document.createElement('div')
    bar.classList.add('eq-bar')
    equalizer.appendChild(bar)

    let multi = i < 3  || i > barNums.length - 4 ? 70 : 140
    bar.style.animation = `move${i} ${Math.random() * 3 + 0.8}s infinite alternate`
    let animation = `@keyframes move${i} { 0% { height: ${random(multi)}; } 25% { height: ${random(multi)}; } 50% { height: ${random(multi)}; } 75% { height: ${random(multi)}; } 100% { height: ${random(multi)}; } }`
    style.innerHTML = style.innerHTML + animation
  }

  equalizer.appendChild(style)
}

function svgAnim () {
  let icons = document.querySelectorAll('.icon')
  icons[0].innerHTML = svgs.ticks
  icons[2].innerHTML = svgs.drum

  if (SVG.supported) {
    let drumLeft = SVG.select('#drum-left')
    drumLeft.animate({ ease: '<', delay: '0s' }).rotate(60)
                  .rotate(-120)
                  .rotate(0)
                  .loop()

    let drumRight = SVG.select('#drum-right')
    drumRight.animate({ ease: '<', delay: '0.5s' }).rotate(80)
                   .rotate(0)
                   .loop()
  }
}

(function init () {
  let downloadBtns = document.querySelectorAll('button')
  downloadBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      // TODO url
      let win = window.open('https://www.apple.com/lae/ios/app-store/', '_blank')
      win.focus()
    })
  })
  equalizerAnim()
  svgAnim()
})()
