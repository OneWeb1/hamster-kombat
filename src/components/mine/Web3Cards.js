const web3CardsWrapper = document.querySelector('.web3-cards__wrapper')
let web3CardsHTML = ''

let showModalHandlerForWeb3 = null



const web3CardHTML = (obj, id) => {
  const { name, description, level, pricesLevel, hueRotate } = obj
  const pricesLevelKeys = Object.keys(pricesLevel)
  const price = pricesLevel[pricesLevelKeys[level]]
  let totalProfit = 0
  if (level) {
    for (let i = 0; i < level; i++) {
      totalProfit += Number(pricesLevelKeys[i])
    }
  }
  showModalHandlerForWeb3 = (target, idx) => {
    openedMyCardsObj = {
      ...web3Cards[idx],
      target,
      id: idx
    }

    showModal()
  }



  return `<div class="card" style="height: 120px;">
        <div style="background: #282828; animation: none;" class="bg "></div>
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

const generateWeb3CardsHTML = () => {
  web3CardsHTML = ''
  web3Cards.forEach((card, id) => {
    web3CardsHTML += web3CardHTML(card, id)
  })

  web3CardsWrapper.innerHTML = web3CardsHTML
  web3CardsWrapper.childNodes.forEach((childNode, idx) => {
    childNode.onclick = () => showModalHandlerForWeb3(childNode, idx)
  })
}

const saveWeb3 = () => {
  localStorage.setItem('web3Cards', JSON.stringify(web3Cards))
}





generateWeb3CardsHTML()