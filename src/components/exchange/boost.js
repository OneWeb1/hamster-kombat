const boostScreen = layoutScreens[2]


renderBoost = (boost) => {

  const boostShowModal = (idx) => {
    openedMyCardsObj = {
      ...boostData[idx],
      target: null,
      id: idx,
      type: idx === 0 ? 'boost-full-energy' : 'boost'
    }


    showModal()
  }

  const boostBox1 = (title, value, imgName, cn) => {
    return `
    <div class="boost-box ${cn}">
      <div class="boost-box__left-wrapper">
        <img src="/assets/boosts/${imgName}.png" alt="icon" />
        <div class="boost-box__right-content">
          <div class="boost-box__text">${title}</div>
          <div class="boost-box__value">
            ${value}
          </div>
        </div>
      </div>
    </div>
  `
  }

  const boostBox2 = (title, imgName, idx) => {
    const box = boostData[idx]
    const levelPrices = box.levelPrices[box.level]

    return `
      <div class="boost-box">
        <div class="boost-box__left-wrapper">
          <img src="/assets/boosts/${imgName}.png" alt="icon" />
          <div class="boost-box__right-content">
            <div class="boost-box__text">${title}</div>
            <div class="boost-box__value">
              <img class="money" src="/assets/money.jpg" alt="" /><span class="boost-price">${toMinified(levelPrices)}</span><span class="boost-level">• ${box.level} lvl</span>
            </div>
          </div>
        </div>
        <div class="boost-box__right-wrapper">
          <img src="/assets/boosts/arrow.png" alt="arrow" />
        </div>
      </div>
    `
  }

  const boostHeaderHTML = `
    <div class="boost-header">
      <div class="boost-title">Your balance</div>
    </div>
    <div class="balance-wrapper">
      <img class="money" src="/assets/money.jpg" alt="" />
       <span class="balance">${formatNumber(balance)}</span>
    </div>
    <h1 class="boost-text__works">How a boost works </h1>
    <div class="boost-ups__wrapper">
      <span class="boost-boxes__title">
        Free daily boosters
      </span>
      ${boostBox1('Full energy', `${fullEnergyDrinks}/${maxFullEnergyDrinks} available`, 'energy')}
      ${boostBox1('Turbo', 'Comming soon', 'space', 'boost-box__active-off')}
    </div>
    
    <div class="boost-ups__wrapper">
      <span class="boost-boxes__title">
        Boosters
      </span>
      ${boostBox2('Multitap', 'tap', 2)}
      ${boostBox2('Energy limit','b',3)}
    </div>
  `

  boostScreen.innerHTML = `
  ${boostHeaderHTML}
  
  `
  const idxs = [0, 2, 3]
  const boxes = boostScreen.querySelectorAll('.boost-box')
  boxes.forEach((box, idx) => {
    if (idxs.includes(idx)) {
      box.addEventListener('click', () => boostShowModal(idx))
    }
  })
}

renderBoost()