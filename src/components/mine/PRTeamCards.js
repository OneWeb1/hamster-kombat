const prteamCardsWrapper = document.querySelector('.prteam-cards__wrapper')
let prteamCardsHTML = ''

let showModalHandlerForPrteam = null



const prteamCardHTML = (obj, id) => {
  const { name, description, level, pricesLevel, hueRotate } = obj
  const pricesLevelKeys = Object.keys(pricesLevel)
  const price = pricesLevel[pricesLevelKeys[level]]
  let totalProfit = 0
  if (level) {
    for (let i = 0; i < level; i++) {
      totalProfit += Number(pricesLevelKeys[i])
    }
  }
  showModalHandlerForPrteam = (target, idx) => {
    openedMyCardsObj = {
      ...prteamCards[idx],
      target,
      id: idx,
      type: 'mine'
    }

    showModal()
  }



  return `<div class="card" style="height: 120px;">
        <div style="background: #262A2F; animation: none;" class="bg "></div>
        <div class="card-child" style="display: flex; padding: 10px;">
          <div style="width: 50px; height: 50px;filter: hue-rotate(${hueRotate}deg); margin:0; margin-right:15px" class="img-wrapper">
            <img style="object-position: 0 0px" src="/assets/robo.jpg" alt="robo" />
          </div>
          <div class="content">
            <div class="title" style="text-align: left;">
              ${name}
            </div>
            
            <div class="majority-row">
              <p>Profit per hour</p>
              <span class="profit-row"><img style="filter: grayscale(${price > balance ? 150:0})" src="/assets/money.jpg" alt="money"><span class="money">${toMinified(totalProfit)}</span></span>
            </div>
          </div>
          <div class="bottom-row" style="border-top: .5px solid #454545">
            <div class="bottom-child" style="border: none">
              <div class="lvl-wrapper">
                lvl <span class="lvl">${level}</span>
              </div>
              <div class="lvl-price">
                <img style="filter: grayscale(${price > balance ? 150:0})" src="/assets/money.jpg" alt="money"> ${pricesLevel[pricesLevelKeys[level]] ? toMinified(pricesLevel[pricesLevelKeys[level]]) : 'Max level up'}
              </div>
            </div>
          </div>
        </div>
      </div>`
}

const generatePrteamCardsHTML = () => {
  prteamCardsHTML = ''
  prteamCards.forEach((card, id) => {
    prteamCardsHTML += prteamCardHTML(card, id)
  })

  prteamCardsWrapper.innerHTML = prteamCardsHTML
  prteamCardsWrapper.childNodes.forEach((childNode, idx) => {
    childNode.onclick = () => showModalHandlerForPrteam(childNode, idx)
  })
}

const savePrteam = () => {
  localStorage.setItem('prteamCards', JSON.stringify(prteamCards))
}





generatePrteamCardsHTML()