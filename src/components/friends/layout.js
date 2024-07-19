const windowFriends = windowWrappers[2]

const renderFriends = () => {
  const titleHTML = `
  <div class="friends-title">Invite friends!</div>
  `
  
  const subtitleHTML = `
  <div class="friends-subtitle">You and your friend will receive bonuses</div>
  `
    
  const boxInfoHTML = (title, prize, prizeImageName, cn) => `
  <div class="friends-box__info ${cn ? cn: ''}">
    <div class="friends-box__left-wrapper">
      <img src="/assets/friends/${prizeImageName}.png" alt="prize" />
    </div>
    <div class="friends-box__right-wrapper">
      <div class="friend-box__title">
        ${title}
      </div>
      <div class="friends-box__bottom-row">
        <div class="friends-box__row-child">
          <div class="friends-box__circle"></div>
          <img src="/assets/money.jpg" />
          <span class="friends-box__prize">+${prize}</span>
        </div>
        <span><p style="padding-top: 1px">for you and your friend</p></span>
      </div>
    </div>
  </div>
  `
    
  const moreBonusesHTML = '<h4 class="friends-title__more-bonuses">More bonuses</h4>'
  
  const yourFriendsHeaderHTML = `
  <div class="friends-header__your-friends">
    <div class="friends-header__your-left">List of your friends</div>
    <div class="friends-header__your-right">
      <img src="/assets/friends/refresh.png" alt="refresh" />
    </div>
  </div>
  `
  
  const boxEmptyFriendsHTML = `
  <div class="friends-box__empty">
    You haven't invited anyone yet
  </div>
  `
  
  const bottomButtonsGroupHTML = `
  <div class="friends-bottom__buttons-group">
    <button class="friends-button__redirect-invite">
      <span>Invite a friends</span>
      <img src="/assets/friends/invite.png" alt="user-icon" />
    </button>
    <button class="friends-button__copy">
      <img src="/assets/friends/copy.png" alt="copy" />
    </button>
  </div>
  `
  
  windowFriends.innerHTML = `
  ${titleHTML}
  ${subtitleHTML}
  ${boxInfoHTML('Invite a friend', '5000', 'prizeOne', 'pb')}
  ${boxInfoHTML('Invite a friend with Telegram Premium', '25000', 'prizeTwo')}
  ${moreBonusesHTML}
  ${yourFriendsHeaderHTML}
  ${boxEmptyFriendsHTML}
  ${bottomButtonsGroupHTML}
  `
}





renderFriends()