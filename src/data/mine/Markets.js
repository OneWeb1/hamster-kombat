let marketsCards = JSON.parse(localStorage.getItem('marketsCards')) || []

function generateMarketsCards() {
  const names = ['x1', 'x2', 'x5', 'x10', 'x20', 'x40', 'x80', 'x160', 'x320', 'x640', 'x1280', 'x2560', 'x5120', 'x10240', 'x20480']
  const descriptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']


  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const description = descriptions[i]
    const maxLevel = 20
    const startProfitPerHour = random(20, 2467)
    const startPriceProfitPerHour = random(20, 12000)
    const fullProfitPerHour = random(56000,123000)

    const card = generateCardData({ name, description, maxLevel, startProfitPerHour, startPriceProfitPerHour, fullProfitPerHour })

    marketsCards.push(card)
  }

}

generateMarketsCards()

