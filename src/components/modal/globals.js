const modalWrapper = document.querySelector('.modal-wrapper')
const modalRelative = document.querySelector('.modal-relative')
const modal = document.querySelector('.modal')
const buttonClose = document.querySelector('.modal-button__close')
const modalImg = document.querySelector('.modal-img')
const modalContent = document.querySelector('.modal-content')

const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
const modalProfitMoney = document.querySelector('.modal-profit__money')
const modalProfitP = document.querySelector('.modal-profit>p')
const moneyImg = document.querySelector('.modal-profit__profit-money')
const modalProfitPrice = document.querySelector('.modal-profit__price')
const buttonUpLevel = document.querySelector('.modal-button_up-level')

let renderDays = null

const hide = () => {
  setTimeout(() => {
    modalWrapper.style.display = "none"
  }, 100)
  modalRelative.classList.remove('show')
  modalRelative.classList.add('hide')
}

const hideModal = (e) => {
  if (!modal.contains(e.target)) {
    hide()
  }

}

