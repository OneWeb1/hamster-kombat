const getLevelsProfit = (obj) => {
  const { start, maxLevel, fullProfit } = obj
  let profits = []

  const maxIteration = (maxLevel - 1) * 10000

  let iteration = 0
  let percent = 0.15
  let profit = start
  let level = 2

  profits.push(profit)

  while (iteration < maxIteration) {
    if (level === maxLevel + 1) {
      const currentProfits = profits.reduce((prev, current) => prev += current)
      if (Math.floor(currentProfits) === Math.floor(fullProfit)) {
        return profits
      }
      if (currentProfits < fullProfit) {
        percent += 0.005
      } else {
        percent -= 0.005
      }
      level = 2
      profit = start
      profits = [profit]
      continue
    }

    profit = profit + (start * percent)
    profits.push(profit)

    level++
    iteration++
  }

  return profits
}

const generateCardData = (obj) => {
  const { name, description, maxLevel, startProfitPerHour, startPriceProfitPerHour, fullProfitPerHour } = obj
  const pricesLevel = {}
  const profits = getLevelsProfit({ start: startProfitPerHour, fullProfit: fullProfitPerHour, maxLevel })
  let price = random(1000, 56000)
  profits.forEach((profit, idx) => {
    pricesLevel[profit] = price
    price += price * .7
  })

  return {
    name,
    description,
    level: 0,
    pricesLevel,
    maxLevel,
    hueRotate: Math.random() * 3000
  }
}