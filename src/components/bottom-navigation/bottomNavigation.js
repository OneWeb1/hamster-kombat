const switchActiveTab = (target, idx) => {
  //if (currentActiveTab === target) return
  const lastImg = currentActiveTab.querySelector('img')
  const currentImg = target.querySelector('img')
  currentActiveWindow.classList.remove('active-window')
  currentActiveTab.classList.remove('active-tab')
  windowWrappers[idx].classList.add('active-window')
  target.classList.add('active-tab')
  lastImg.style.filter = 'invert(0%)'
  if (idx > 0 && idx < 4) currentImg.style.filter = 'invert(100%)'

  if (idx === 1) {
    currentActiveMainTab.classList.remove('main-tab__active-tab')
    currentActiveWindowCards.classList.remove('active-cards__window')
    currentActiveMainTab = mainTabItems[0]

    currentActiveMainTab.classList.add('main-tab__active-tab')
    cardsWindow[0].classList.add('active-cards__window')

    currentActiveWindowCards = cardsWindow[0]
    currentActiveTabId = 0
    generatePrteamCardsHTML()
  }

  if (currentLayoutScreen) {
    currentLayoutScreen.classList.remove('layout-screen__active')
    currentLayoutScreen = null
  }

  currentActiveWindow = windowWrappers[idx]
  currentActiveTab = target
}

navItems.forEach((item, idx) => {
  item.addEventListener('click', () => switchActiveTab(item, idx))
})