const getDays = () => {
  const days = []
  const prizes = [500, 1000, 2500, 5000, 15000, 25000, 100000, 500000, 1000000, 5000000]
  const daysNumber = 10

  for (let i = 0; i < daysNumber; i++) {
    days.push({
      name: `Day ${i+1}`,
      prize: prizes[i]
    })
  }

  return days
}


const earnData = [
  {
    name: 'Vitalik Buterin’s very unpopular move',
    description: 'Bloomberg Apologizes to Binance, Buterin’s Crypto Politics, BTC’s Tremendous Growth',
    prize: 100000,
    imgSrc: '/assets/earn/youtube.png'
  },
  {
    name: 'Ripple’s historic legal battle with SEC explained',
    description: 'Ripple vs SEC: here’s what this trial will mean for all crypto',
    prize: 100000,
    imgSrc: '/assets/earn/youtube.png'
  },
  {
    name: 'Daily reward',
    description: 'Accrue coins for logging into the game daily without skipping',
    currentDayId: 0,
    claimDays: [],
    days: getDays(),
    imgSrc: '/assets/earn/daily.png'
  },
  {
    name: 'Join our TG channel',
    prize: 5000,
    imgSrc: '/assets/earn/telegram.png'
  },
  {
    name: 'Follow our X account',
    prize: 5000,
    imgSrc: '/assets/earn/x.png'
  },
  {
    name: 'Choose your exchange',
    prize: 5000,
    imgSrc: '/assets/earn/hamster.png'
  },
  {
    name: 'Invite 3 friends',
    prize: 25000,
    imgSrc: '/assets/earn/invite.png'
  },

]