

const mineCardsLevelUp = () => {
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
  balanceWrappers.forEach(balanceWrapper => {
    balanceWrapper.textContent = formatNumber(balance)
  })
  profitBalanceWrapper.textContent = toMinified(profitBalance)


  cards[currentActiveTabId][openedMyCardsObj.id].level += 1
  updateHTMLCallbacks[currentActiveTabId]()
  hide()
}

const boostBoxLevelUp = () => {
  const { levelPrices, level, value, id } = openedMyCardsObj
  if (boostData[id].level >= levelPrices.length - 1) return
  if (balance - levelPrices[level] >= 0) {
    boostData[id].level++
    balance -= levelPrices[level]

    if (id === 2) {
      profitTap += value
      profitTapWrapper.textContent = `+${profitTap}`
    }

    if (id === 3) {
      maxEnergyNumber += value
      energyMaxNumberWrappers.forEach(energyMaxNumberWrapper => {
        energyMaxNumberWrapper.textContent = maxEnergyNumber
      })
    }

    renderBoost()
  }

  hide()
}


const boostBoxFullEnergy = () => {
  if (fullEnergyDrinks > 0) {
    fullEnergyDrinks--
    energyNumber = energyNumber + maxEnergyNumber > maxEnergyNumber ? maxEnergyNumber : energyNumber + maxEnergyNumber
    energyNumberWrappers.forEach(energyNumberWrapper => {
      energyNumberWrapper.textContent = energyNumber
    })
    renderBoost()
  }
  hide()
}


const levelUpCallbacks = {
  mine: mineCardsLevelUp,
  boost: boostBoxLevelUp,
  'boost-full-energy': boostBoxFullEnergy
}

const levelUp = () => {
  levelUpCallbacks[openedMyCardsObj.type]()
}


modalWrapper.addEventListener('click', hideModal)
buttonClose.addEventListener('click', hide)
//buttonUpLevel.addEventListener('click', levelUp)