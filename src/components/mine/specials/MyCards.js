const cardsWrapper = document.querySelector('.cards-wrapper')
let myCardsHTML = ''

let showModalHandler = null



const cardHTML = (obj, id) => {
  const { name, description, level, pricesLevel, hueRotate } = obj
  const pricesLevelKeys = Object.keys(pricesLevel)
  const price = pricesLevel[pricesLevelKeys[level]]
  let totalProfit = 0
  if (level) {
    for (let i = 0; i < level; i++) {
      totalProfit += Number(pricesLevelKeys[i])
    }
  }
  showModalHandler = (target, idx) => {
    openedMyCardsObj = {
      ...myCards[idx],
      target,
      id: idx,
      type: 'mine'
    }

    showModal()
  }



  return `<div class="card">
        <div style="filter: hue-rotate(${id*30}deg);" class="bg l9"></div>
        <div class="card-child">
          <div style="filter: hue-rotate(${hueRotate}deg);" class="img-wrapper">
            <img src="/assets/robo.jpg" alt="robo" />
          </div>
          <div class="title">
            ${name}
          </div>
          <div class="description">
            ${description}
          </div>
          <div class="flex-row">
            <p>Profit per hour</p>
            <span class="profit-row"><img style="filter: grayscale(${price > balance ? 150:0})" src="/assets/money.jpg" alt="money"><span class="money">${toMinified(totalProfit)}</span></span>
          </div>
          <div class="bottom-row">
            <div class="bottom-child">
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

const generateMyCardsHTML = () => {
  myCardsHTML = ''
  myCards.forEach((card, id) => {
    myCardsHTML += cardHTML(card, id)
  })

  cardsWrapper.innerHTML = myCardsHTML
  cardsWrapper.childNodes.forEach((childNode, idx) => {
    childNode.onclick = () => showModalHandler(childNode, idx)
  })
}

const save = () => {
  localStorage.setItem('myCards', JSON.stringify(myCards))
}

const changeLevel = (level) => {
  myCards = myCards.map(card => { return { ...card, level } })
  save()
  generateMyCardsHTML()
}




generateMyCardsHTML()