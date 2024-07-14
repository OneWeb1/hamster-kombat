const tapWrapper = document.querySelector('.tap-wrapper')
const energyNumberWrapper = document.querySelector('.energy-number')


let positions = []


let touchesLength = 1
let lastTouchesLength = 2

let energyNumber = 9000

const tapStartHandler = (e) => {
  if (!tapWrapper.contains(e.target)) return
  lastTouchesLength = Math.max(touchesLength, lastTouchesLength)
  touchesLength = e.touches.length

  positions.push(...e.touches)
  positions = positions.slice(0, 3)
  lastTouchesLength = touchesLength
  touchesLength = e.touches.length
}

const tapEndHandler = (e) => {
  if (!tapWrapper.contains(e.target)) return
  if (!(energyNumber - profitTap >= 0)) return

  if (lastTouchesLength === 1 && positions.length === 3) {
    positions = [e.changedTouches[0]]
  }

  positions.forEach(position => {
    const x = position.clientX
    const y = position.clientY
    const number = document.createElement('div')
    number.textContent = `+${profitTap}`
    number.classList.add('tap-number')
    number.style.left = x + 'px'
    number.style.top = y - 20 + 'px'
    document.body.appendChild(number)
    balance += energyNumber >= profitTap ? profitTap : 0
    energyNumber -= profitTap
    energyNumberWrapper.textContent = energyNumber
    balanceWrapper.textContent = formatNumber(balance)
    levelRowChild.style.width = (balance/5000)*100+'%'
    setTimeout(() => {
      document.body.removeChild(number)
    }, 900)

  })

  positions = []

}

window.addEventListener('touchstart', tapStartHandler)
window.addEventListener('touchend', tapEndHandler)