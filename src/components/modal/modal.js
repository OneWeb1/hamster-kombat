const modalWrapper = document.querySelector('.modal-wrapper')
const modalRelative = document.querySelector('.modal-relative')
const modal = document.querySelector('.modal')
const buttonClose = document.querySelector('.modal-button__close')
const modalImg = document.querySelector('.modal-img')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
const modalProfitMoney = document.querySelector('.modal-profit__money')
const modalProfitPrice = document.querySelector('.modal-profit__price')
const buttonUpLevel = document.querySelector('.modal-button_up-level')


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

const showModal = () => {
  const obj = openedMyCardsObj
  const pricesLevelKeys = Object.keys(obj.pricesLevel)
  const profit = pricesLevelKeys[obj.level]
  const price = obj.pricesLevel[profit]?.toFixed(0)
  if (balance < price) return
  modalTitle.textContent = obj.name
  modalDescription.textContent = obj.description
  modalProfitMoney.textContent = `+${toMinified(Number(profit))}`
  modalProfitPrice.textContent = price ? formatNumber(price) : 'Max level up'
  modalImg.style.filter = `hue-rotate(${obj.hueRotate}deg)`
  modalWrapper.style.display = "block"

  setTimeout(() => {
    modalRelative.classList.remove('hide')
    modalRelative.classList.add('show')
  }, 0)
}

const levelUp = () => {
  const cards = [prteamCards, marketsCards, legalCards, web3Cards, myCards]
  const updateHTMLCallbacks = [generatePrteamCardsHTML, generateMarketsCardsHTML, generateLegalCardsHTML, generateWeb3CardsHTML, generateMyCardsHTML]
  const card = cards[currentActiveTabId][openedMyCardsObj.id]
  const pricesLevelKeys = Object.keys(card.pricesLevel)
  // const price = card.pricesLevel[pricesLevelKeys[card.level]]
  const profit = pricesLevelKeys[card.level]
  const price = card.pricesLevel[profit]?.toFixed(0)
  if (card.level >= 20 || balance < price) {
    updateHTMLCallbacks[currentActiveTabId]()
    hide()
    return
  }

  balance -= Number(price) ? Number(price) : 0
  profitBalance += Number(profit) ? Number(profit) : 0

  balanceWrapper.textContent = formatNumber(balance)
  profitBalanceWrapper.textContent = toMinified(profitBalance)


  cards[currentActiveTabId][openedMyCardsObj.id].level += 1
  updateHTMLCallbacks[currentActiveTabId]()
  hide()
}


modalWrapper.addEventListener('click', hideModal)
buttonClose.addEventListener('click', hide)
buttonUpLevel.addEventListener('click', levelUp)