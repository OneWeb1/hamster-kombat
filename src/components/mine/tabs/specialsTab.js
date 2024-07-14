

 currentActiveSpecialsTab = specialsTabItems[0]
currentActiveSpecialsWindow = specialsWindow[0]

const switchActiveSpecialsTab = (target, idx) => {
  if(currentActiveSpecialsTab === target) return

  currentActiveSpecialsTab.classList.remove('specials-tabs__active-tab')
  currentActiveSpecialsWindow.classList.remove('specials-window__active-window')
  target.classList.add('specials-tabs__active-tab')
  specialsWindow[idx].classList.add('specials-window__active-window')
  currentActiveSpecialsTab = target
  currentActiveSpecialsWindow = specialsWindow[idx]
}


specialsTabItems.forEach((item, idx) => {
  item.addEventListener('click', () => switchActiveSpecialsTab(item, idx))
})