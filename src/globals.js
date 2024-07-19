const specialsWindow = document.querySelectorAll('.specials-window')
const specialsTabItems = document.querySelectorAll('.specials-tabs__item')
const windowWrappers = document.querySelectorAll('.window-wrapper')
const navItems = document.querySelectorAll('.nav-item')
const mainTabItems = document.querySelectorAll('.main-tab__item')
const cardsWindow = document.querySelectorAll('.cards-window')
const energyNumberWrappers = document.querySelectorAll('.energy-number')
const energyMaxNumberWrappers = document.querySelectorAll('.energy-max')
const layoutScreens = document.querySelectorAll('.layout-screen')
const levelRowChilds = document.querySelectorAll('.level-row__bottom-child')
const tapHamsterImgs = document.querySelectorAll('.tap-hamster')





const balanceWrappers = document.querySelectorAll('.balance')
const profitBalanceWrapper = document.querySelector('.profit-balance')
const profitTapWrapper = document.querySelector('.profit-tap')
const moneyUp = document.querySelector('.money-up')
const levelNameWrapper = document.querySelector('.level-name')
const levelNumberWrapper = document.querySelector('.level-number')
const levelLengthWrapper = document.querySelector('.level-length')

let renderLiderboard = null


const levelMinPoints = [
  0,
  5000,
  25000,
  100000,
  1000000,
  2000000,
  10000000,
  50000000,
  100000000,
  1000000000,
  18000000000
  ]

const levelNames = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Epic', 'Legendary', 'Master', 'Grandmaster', 'Lord', 'Creator']

const maxFullEnergyDrinks = 6


let openedMyCardsObj = null
let currentActiveSpecialsWindow = null
let currentActiveSpecialsTab = null
let currentLayoutScreen = null

let currentLevelPoint = null
let currentLevelName = null
let currentLevelNumber = null

let currentLiderboardLevelNumber = null
let renderBoost = null

let currentActiveWindow = windowWrappers[0]
let currentActiveTab = navItems[0]
let currentActiveMainTab = mainTabItems[0]
let currentActiveWindowCards = cardsWindow[0]

let currentActiveWindowId = 0
let currentActiveTabId = 0
let balance = 0

let maxEnergyNumber = 500
let energyNumber = 500
let profitBalance = 0
let profitTap = 1

let fullEnergyDrinks = 6


const setCurrentLevelPoint = () => {
  for (let i = 0; i <= levelMinPoints.length; i++) {
    if (balance >= levelMinPoints[levelMinPoints.length - 1]) {
      currentLevelPoint = levelMinPoints[i - 1]
      currentLevelName = levelNames[i - 1]
      currentLevelNumber = i

      levelNameWrapper.textContent = currentLevelName
      levelNumberWrapper.textContent = currentLevelNumber
      levelLengthWrapper.textContent = levelNames.length
      moneyUp.textContent = toMinified(currentLevelPoint)
      levelRowChilds.forEach(levelRowChild => {
        levelRowChild.style.width = (balance / currentLevelPoint) * 100 + '%'
      })
      tapHamsterImgs.forEach(tapHamsterImg => {
        tapHamsterImg.src = `/assets/hamsters/${currentLevelName?.toLowerCase()}.png`
      })
      
    }

    if (balance < levelMinPoints[i]) {

      currentLevelPoint = levelMinPoints[i]
      currentLevelName = levelNames[i - 1]
      currentLevelNumber = i
      let levelUpValue = toMinified(currentLevelPoint)
      levelNameWrapper.textContent = currentLevelName
      levelNumberWrapper.textContent = currentLevelNumber
      levelLengthWrapper.textContent = levelNames.length
      moneyUp.textContent = levelUpValue
      levelRowChilds.forEach(levelRowChild => {
        levelRowChild.style.width = (balance / currentLevelPoint) * 100 + '%'
      })
      tapHamsterImgs.forEach(tapHamsterImg => {
        tapHamsterImg.src = `/assets/hamsters/${currentLevelName?.toLowerCase()}.png`
      })
      return
    }
  }
}
setCurrentLevelPoint()


balanceWrappers.forEach(balanceWrapper => {
  balanceWrapper.textContent = formatNumber(balance)
})
profitBalanceWrapper.textContent = toMinified(profitBalance)
levelRowChilds.forEach(levelRowChild => {
  levelRowChild.style.width = (balance / currentLevelPoint) * 100 + '%'
})
profitTapWrapper.textContent = `+${profitTap}`
energyNumberWrappers.forEach(energyNumberWrapper => {
  energyNumberWrapper.textContent = energyNumber
})
energyMaxNumberWrappers.forEach(energyMaxNumberWrapper => {
  energyMaxNumberWrapper.textContent = maxEnergyNumber
})
const saveDate = () => {
  localStorage.setItem('save-balance', balance)
  localStorage.setItem('save-energy', energyNumber)
  localStorage.setItem('timestampLeft', new Date().getTime())
}

const getSaveDate = () => {
  const saveBalance = localStorage.getItem('save-balance', balance)
  const saveEnergy = localStorage.getItem('save-energy', energyNumber)
  let timestampLeft = localStorage.getItem('timestampLeft');
  if (timestampLeft) {
    let timestampNow = new Date().getTime();
    let millisecondsAway = timestampNow - parseInt(timestampLeft, 10);
    let secondsAway = millisecondsAway / 1000;
    console.log('Пройшло часу: ' + secondsAway + ' секунд');
  }
}



setInterval(() => {
  if (energyNumber < maxEnergyNumber) {
    energyNumber += energyNumber + 3 > maxEnergyNumber ? maxEnergyNumber - energyNumber : 3
    energyNumberWrappers.forEach(energyNumberWrapper => {
      energyNumberWrapper.textContent = energyNumber
    })
  }
  if (profitBalance) {
    balance += profitBalance / 60 / 60
  }
  levelRowChilds.forEach(levelRowChild => {
    levelRowChild.style.width = (balance / currentLevelPoint) * 100 + '%'
  })
  document.querySelectorAll('.balance').forEach(balanceWrapper => {
    balanceWrapper.textContent = formatNumber(balance)
  })
  
  renderLiderboard(liderboardData[currentLiderboardLevelNumber])
  setCurrentLevelPoint()
  saveDate()
}, 1000)

getSaveDate()