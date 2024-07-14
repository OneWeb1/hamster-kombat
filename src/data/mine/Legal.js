let legalCards = JSON.parse(localStorage.getItem('legalCards')) || []

function generateLegalCards() {
  const names = ['Airbase', 'Danone', 'Linear', 'Gradient', 'Leo nardo', 'Viopex', 'BMW', 'Mersedes', 'Lexer', 'Mimeox', 'Sports', 'Bronza', 'Gold', 'Actual', 'World']
  const descriptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']


  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const description = descriptions[i]
    const maxLevel = 20
    const startProfitPerHour = random(20, 2467)
    const startPriceProfitPerHour = random(20, 12000)
    const fullProfitPerHour = random(56000,123000)

    const card = generateCardData({ name, description, maxLevel, startProfitPerHour, startPriceProfitPerHour, fullProfitPerHour })

    legalCards.push(card)
  }

}

generateLegalCards()

