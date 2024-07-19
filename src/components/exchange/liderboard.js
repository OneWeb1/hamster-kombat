const liderboardScreen = layoutScreens[1]

const slideRankLeft = () => {
  currentLiderboardLevelNumber = currentLiderboardLevelNumber - 1 >= 0 ? currentLiderboardLevelNumber - 1 : 0
  renderLiderboard(liderboardData[currentLiderboardLevelNumber])
}

const slideRankRight = () => {
  currentLiderboardLevelNumber = currentLiderboardLevelNumber + 1 <= 10 ? currentLiderboardLevelNumber + 1 : 10

  renderLiderboard(liderboardData[currentLiderboardLevelNumber])
}

 renderLiderboard = (rank) => {
  const currentRank = levelNames[currentLevelNumber - 1]
  let rankPlayerItemsHTML = ''
  const rankPlayerItemHTML = (player, bg) => `
      <div style="opacity: ${player?1:0}" class="rank-player__item">
        <div class="rank-player__left-wrapper">
          <div style="background: linear-gradient(${bg})" class="rank-player__child-left">
            <img src="/assets/liderboard-avatar.png" alt="avatar" />
          </div>
          <div class="rank-player__child-right">
            <div class="rank-player__username">${player?.username}</div>
            
            <div class="rank-player__money-wrapper">
              <img src="/assets/money.jpg" alt="money" />
              <span class="rank-player__money">${player?.profitPerHour}</span>
            </div>
          </div>
        </div>
        <div class="rank-player__right-wrapper">
          <div class="rank-player__number">${player?.id}</div>
        </div>
      </div>
    `

  for (let i = 0; i < rank?.players.length; i++) {
    rankPlayerItemsHTML += rankPlayerItemHTML(rank?.players[i], rank?.rankBackground)
  }


  const rankHeaderHTML = `
    <div style="background: linear-gradient(${rank?.rankBackground})" class="rank-header__bg"></div>
    <header class='rank-header'>
      <div class='rank-header__row'>
        <div class="rank-header__slide-button" onclick="slideRankLeft()">
          <img style="transform: rotate(180deg)" src='/assets/btns/arrow-slide.png' alt='btn-slide' />
        </div>
        <div class="rank-header__slide-display">
          <div class="rank-header__display-child">
            <img class='rank-slide__main-img' src='${rank?.hamsterImageSrc}' alt='rank-hamster' />
          </div>
        </div>
        <div class="rank-header__slide-button" onclick="slideRankRight()">
          <img src='/assets/btns/arrow-slide.png' alt='btn-slide' />
        </div>
      </div>
      <div class="rank-slide__name">${rank?.rankName}</div>
      ${currentRank === rank?.rankName ?`<div class="rank-slide__progress"><span class="rank-slide__money" >${toMinified(balance)}</span>/<span class="rank-slide__next-money" >${toMinified(levelMinPoints[currentLiderboardLevelNumber+1])}</span></div>
      <div style="height: 16px; border: 2px solid #303446; margin:0;" class="level-row__bottom">
        <div style="width:${(balance / currentLevelPoint) * 100 + '%'};" class="level-row__bottom-child">
        </div>
      </div>`:`<span class="rank-min__balance">${rank?.minBalanceRank}</span>`}
    </header>
    <div class="rank-players__wrapper">
        ${rankPlayerItemsHTML}
        ${currentRank === rank?.rankName ?`<div class="rank-player__my">
           ${rankPlayerItemHTML({
           id: '10000+',
             username: 'Vlad',
             profitPerHour: profitBalance,
           }, rank?.rankBackground)}
        </div>`:''}
    </div>
  `

  liderboardScreen.innerHTML = `
  ${rankHeaderHTML}
  
  `
}

renderLiderboard(liderboardData[currentLiderboardLevelNumber])