const renderMineHTML = (obj, profit, price) => {
  return `
  <div style="filter:hue-rotate(${obj.hueRotate}deg);" class="modal-img">
    <img src="/assets/robo.jpg" alt="robo" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <div class="modal-description">
    ${obj.description}
  </div>
  <div class="modal-profit">
    <p>Profit per hour</p>
    <span class="modal-flex"><img class="modal-profit__profit-money" src="/assets/money.jpg" alt="money" /> <span class="modal-profit__money">+${toMinified(Number(profit))}</span></span>
  </div>
  <span class="modal-up_per"><img src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">${price ? formatNumber(price) : 'Max level up'}</span></span>
  <button class="modal-button_up-level" type="submit" onclick="levelUp()">Go ahead</button>
  `
}

const renderBoostHTML = (obj) => {
  return `
  <div class="modal-img">
    <img src="${obj.imgSrc}" alt="image" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <div class="modal-description">
    ${obj.description}
  </div>
  <div class="modal-profit">
    <p></p>
    <span class="modal-flex"><span style="font-size: 16px; margin-top: 15px;" class="modal-profit__money">${obj.subscription + ` ${obj.level}`}</span></span>
  </div>
  <span class="modal-up_per"><img src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">${formatNumber(obj.levelPrices[obj.level]) + `<span style="color: #757574; margin-left: 5px; font-weight: 400;">• ${obj.level} lvl</span>`}</span></span>
  <button class="modal-button_up-level" type="submit" onclick="levelUp()">Go ahead</button>
  `
}

const renderBoostFullEnergyHTML = (obj) => {
  return `
  <div class="modal-img">
    <img src="${obj.imgSrc}" alt="image" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <div class="modal-description">
    ${obj.description}
  </div>
  <span class="modal-up_per"><img src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">Free</span></span>
  <button class="modal-button_up-level" type="submit" onclick="levelUp()">Go ahead</button>
  `
}

const renderEarnYoutubeTaskHTML = (obj) => {
  return `
  <div class="modal-img">
    <img src="${obj.imgSrc}" alt="image" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <div class="modal-description">
    ${obj.description}
  </div>
  <button class="modal-button__watch" type="submit" onclick="">Watch video</button>
  <span class="modal-up_per"><img style="margin-right: 6px;" src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">+${formatNumber(obj.prize)}</span></span>
  <button class="modal-button_up-level" type="submit" onclick="">Check</button>
  `
}

const renderEarnDailyTaskHTML = (obj) => {
  const coinStyle = `transform: scale(.8);box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.12), 0px 0px 0px 8px rgba(255, 255, 255,0.07); width: 25px; height: 25px; margin-top: 0;`
  //#5EBB68
  renderDays = () => {
    return obj.days.map((day, idx) => {
      const isClaimed = obj.claimDays.includes(idx)
      return `
      <div style="background:${isClaimed?'linear-gradient(90deg, #5EC568, #307637)':'none'};border: ${ idx === obj.currentDayId ?`2px`:'0px'} solid #5EBB68;margin-right:${(idx+1)%4!==0?24/3+'px':0}" class="modal-day__box">
        <div class="modal-day__name">${day.name}</div>
        <div style="${coinStyle}" class="earn-coin">
          <img style="width: 28px; height: 28px;" class="earn-coin__img" src="assets/money.jpg" alt="coin" />
        </div>
        <div class="modal-day__prize">${toMinified(day.prize)}</div>
      </div>`
    }).join('')
  }


  return `
  <div style="padding-bottom: 80px" class="modal-daily__wrapper">
    <div class="modal-img">
      <img src="${obj.imgSrc}" alt="image" />
    </div>
    <div class="modal-title">
      ${obj.name}
    </div>
    <div class="modal-description">
      ${obj.description}
    </div>
    <div style="padding-bottom:370px;"  class="modal-days__wrapper">
      ${renderDays()}
    </div>
    <button style="position: fixed; bottom: 50px; width: calc(100% - 30px)" class="modal-button_up-level" type="submit" onclick="claimHandler()">Claim</button>
  </div>
  `
}

const renderEarnSocialTaskHTML = (obj) => {
  return `
  <div class="modal-img">
    <img src="${obj.imgSrc}" alt="image" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <button class="modal-button__join" type="submit" onclick="">Join</button>
  <span class="modal-up_per"><img style="margin-right: 6px;" src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">+${formatNumber(obj.prize)}</span></span>
  `
}

const renderEarnChooseTaskHTML = (obj) => {
  return `
  <div class="modal-img">
    <img src="${obj.imgSrc}" alt="image" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <button class="modal-button__join" type="submit" onclick="">Choose</button>
  <span class="modal-up_per"><img style="margin-right: 6px;" src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">+${formatNumber(obj.prize)}</span></span>
  `
}

const renderEarnInviteTaskHTML = (obj) => {
  return `
  <div class="modal-img">
    <img src="${obj.imgSrc}" alt="image" />
  </div>
  <div class="modal-title">
    ${obj.name}
  </div>
  <span class="modal-up_per"><img style="margin-right: 6px;" src="/assets/money.jpg" alt="money" /> <span class="modal-profit__price">+${formatNumber(obj.prize)}</span></span>
  `
}

const showModal = () => {
  const obj = openedMyCardsObj
  if (obj?.type === 'mine') {
    const pricesLevelKeys = Object.keys(obj.pricesLevel)
    const profit = pricesLevelKeys[obj.level]
    const price = obj.pricesLevel[profit]?.toFixed(0)
    if (balance < price) return

    modalContent.innerHTML = renderMineHTML(obj, profit, price)
  }
  if (obj?.type === 'boost') {
    modalContent.innerHTML = renderBoostHTML(obj)
  }
  if (obj?.type === 'boost-full-energy') {
    modalContent.innerHTML = renderBoostFullEnergyHTML(obj)
  }
  if (obj?.type === 'youtube-task') {
    modalContent.innerHTML = renderEarnYoutubeTaskHTML(obj)
  }
  if (obj?.type === 'daily-task') {
    modalContent.innerHTML = renderEarnDailyTaskHTML(obj)
  }
  if (obj?.type === 'social-task') {
    modalContent.innerHTML = renderEarnSocialTaskHTML(obj)
  }
  if (obj?.type === 'choose-task') {
    modalContent.innerHTML = renderEarnChooseTaskHTML(obj)
  }
  if (obj?.type === 'invite-task') {
    modalContent.innerHTML = renderEarnInviteTaskHTML(obj)
  }

  modalWrapper.style.display = "block"

  setTimeout(() => {
    modalRelative.classList.remove('hide')
    modalRelative.classList.add('show')
  }, 0)
}