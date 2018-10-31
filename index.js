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
  let icon = document.querySelectorAll('.icon')[2]
  icon.innerHTML = svgs.drum

  if (SVG.supported) {
    // let drum = SVG.select('#drum')
    let left = SVG.select('#drum-left')
    left.animate({ ease: '<', delay: '0s' }).rotate(60)
                  .rotate(-120)
                  .rotate(0)
                  .loop()

    let right = SVG.select('#drum-right')
    right.animate({ ease: '<', delay: '0.5s' }).rotate(80)
                   .rotate(0)
                   .loop()
  }
}

(function init () {
  equalizerAnim()
  svgAnim()
})()
