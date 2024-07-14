const updateHTMLCallbacks = [generatePrteamCardsHTML, generateMarketsCardsHTML, generateLegalCardsHTML, generateWeb3CardsHTML, generateMyCardsHTML]

const switchActiveMainTab = (target, idx) => {
  //if(currentActiveMainTab === target) return
  if(idx === 4) {
    currentActiveSpecialsTab.classList.remove('specials-tabs__active-tab')
    currentActiveSpecialsWindow.classList.remove('specials-window__active-window')
    specialsWindow[0].classList.add('specials-window__active-window')
    specialsTabItems[0].classList.add('specials-tabs__active-tab')
    currentActiveSpecialsWindow = specialsWindow[0]
    currentActiveSpecialsTab = specialsTabItems[0]
  }
  currentActiveMainTab.classList.remove('main-tab__active-tab')
  currentActiveWindowCards.classList.remove('active-cards__window')
  target.classList.add('main-tab__active-tab')
  cardsWindow[idx].classList.add('active-cards__window')
  
  currentActiveMainTab = target
  currentActiveWindowCards = cardsWindow[idx]
  currentActiveTabId = idx
  updateHTMLCallbacks[idx]()
}


mainTabItems.forEach((item, idx) => {
  item.addEventListener('click', () => switchActiveMainTab(item, idx))
})