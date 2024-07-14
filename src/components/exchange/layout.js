const layoutScreens = document.querySelectorAll('.layout-screen')
const levelWrapper = document.querySelector('.level-wrapper')
const btnHeader = document.querySelector('.header-btn')
const btnBoost = document.querySelector('.btn-boost')


const switchActiveLayout = (idx) => {
  currentActiveTab.classList.remove('active-tab')
  currentLayoutScreen = layoutScreens[idx]
  currentLayoutScreen.classList.add('layout-screen__active')
}


btnHeader.addEventListener('click', () => {
  switchActiveLayout(0)
})

levelWrapper.addEventListener('click', () => {
    switchActiveLayout(1)
})

btnBoost.addEventListener('click', () => {
  switchActiveLayout(2)
})