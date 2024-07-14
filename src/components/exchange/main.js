const main = document.querySelector('.main')


const resize = () => {
  main.style.height = window.innerHeight - 60 + 'px'
  
}


document.addEventListener('resize', resize)

window.addEventListener('load', () => {
  resize()
})

resize()