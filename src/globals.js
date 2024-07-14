const specialsWindow = document.querySelectorAll('.specials-window')
const specialsTabItems = document.querySelectorAll('.specials-tabs__item')
const windowWrappers = document.querySelectorAll('.window-wrapper')
const navItems = document.querySelectorAll('.nav-item')
const mainTabItems = document.querySelectorAll('.main-tab__item')
const cardsWindow = document.querySelectorAll('.cards-window')


const balanceWrapper = document.querySelector('.balance')
const profitBalanceWrapper = document.querySelector('.profit-balance')
const levelRowChild = document.querySelector('.level-row__bottom-child')
const profitTapWrapper = document.querySelector('.profit-tap')



let openedMyCardsObj = null
let currentActiveSpecialsWindow = null
let currentActiveSpecialsTab = null
let currentLayoutScreen = null

let currentActiveWindow = windowWrappers[0]
let currentActiveTab = navItems[0]
let currentActiveMainTab = mainTabItems[0]
let currentActiveWindowCards = cardsWindow[0]

let currentActiveTabId = 0
let balance = 177
let profitBalance = 0
let profitTap = 5



balanceWrapper.textContent = formatNumber(balance)
profitBalanceWrapper.textContent = toMinified(profitBalance)
levelRowChild.style.width = (balance / 5000) * 100 + '%'
profitTapWrapper.textContent = `+${profitTap}`