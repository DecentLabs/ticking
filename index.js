let equalizer = document.querySelector('.equalizer')
let style = document.createElement('style')

let bars = [];
let barNums = 25;

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
