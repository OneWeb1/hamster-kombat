const windowEarn = windowWrappers[3]

const earnModalTypes = ['youtube-task', 'youtube-task', 'daily-task', 'social-task', 'social-task', 'choose-task', 'invite-task']

const earnShowModal = (idx) => {
  openedMyCardsObj = {
    ...earnData[idx],
    target: null,
    id: idx,
    type: earnModalTypes[idx]
  }

  showModal()
}

const renderEarn = () => {
  const earnCoinHTML = `
  <div class="earn-coin">
    <img class="earn-coin__img" src="assets/money.jpg" alt="coin" />
  </div>
  `
  
  const earnTitleHTML = `
  <div class="earn-title">
    Earn more coins
  </div>
  `
  
  const earnTaskBox = (title,prize, imgName, idx) => {
  
    return `
        <div class="boost-box" onclick="earnShowModal(${idx})">
          <div class="boost-box__left-wrapper">
            <img style="transform: scale(.8); object-fit: contain" src="/assets/earn/${imgName}.png" alt="icon" />
            <div class="boost-box__right-content">
              <div class="boost-box__text">${title}</div>
              <div class="boost-box__value">
                <img style="margin-right: 5px;" class="money" src="/assets/money.jpg" alt="" /><span class="boost-price">+${formatNumber(prize)}</span>
              </div>
            </div>
          </div>
          <div class="boost-box__right-wrapper">
            <img src="/assets/boosts/arrow.png" alt="arrow" />
          </div>
        </div>
      `
  }
  
  windowEarn.innerHTML = `
  ${earnCoinHTML}
  ${earnTitleHTML}
  <div class="boost-ups__wrapper">
    <span class="boost-boxes__title">
      Hamster Youtube
    </span>
    ${earnTaskBox(`Vitalik Buterin’s very unpopular move`, 100000, 'youtube', 0)}
    ${earnTaskBox(`Ripple's historic legal battle with SEC exsplained`,100000,'youtube',1)}
  </div>
  <div class="boost-ups__wrapper">
    <span class="boost-boxes__title">
      Daily tasks
    </span>
    ${earnTaskBox(`Daily reward`, 6649000,'daily', 2)}
  </div>
  <div class="boost-ups__wrapper">
    <span class="boost-boxes__title">
      Tasks list
    </span>
    ${earnTaskBox(`Join out TG channel`,5000, 'telegram', 3)}
    ${earnTaskBox(`Follow our X account`,5000, 'x', 4)}
    ${earnTaskBox(`Choose your exchange`,5000, 'hamster', 5)}
    ${earnTaskBox(`Invite 3 friends`,25000, 'invite', 6)}
  </div>
  `
}




renderEarn()

