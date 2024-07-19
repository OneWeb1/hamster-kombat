const generatePlayers = (avatar, minmax) => {
  const players = []
  for (let i = 0; i < 100; i++) {
    players.push({
      id: i + 1,
      username: `Player${Math.floor(random(100,1000000))}`,
      profitPerHour: formatNumber(Math.floor(random(minmax[0], minmax[1]))),
      avatar: `/assets/liderboard/avatars/${avatar}.png`
    })
  }
  return players.sort((a, b) => Number(b.profitPerHour.split(',').join('')) - Number(a.profitPerHour.split(',').join(''))).map((player, idx) => { return { ...player, id: idx+1 } })
}


const liderboardData = [
  {
    rankName: 'Bronze',
    minBalanceRank: 'from 0',
    hamsterImageSrc: '/assets/hamsters/bronze.png',
    rankBackground: '135deg, #764B25, #7A4326',
    players: generatePlayers('bronze-avatar', [0, 12000])
  },
  {
    rankName: 'Silver',
    minBalanceRank: 'from 5K',
    hamsterImageSrc: '/assets/hamsters/silver.png',
    rankBackground: '135deg, #3D4859, #545F6F',
    players: generatePlayers('silver-avatar', [6000, 45000])
  },
  {
    rankName: 'Gold',
    minBalanceRank: 'from 25K',
    hamsterImageSrc: '/assets/hamsters/gold.png',
    rankBackground: '135deg, #875E1D, #A4782B',
    players: generatePlayers('gold-avatar', [25000, 120000])
  },
  {
    rankName: 'Platinum',
    minBalanceRank: 'from 100K',
    hamsterImageSrc: '/assets/hamsters/platinum.png',
    rankBackground: '135deg, #425460, #586172',
    players: generatePlayers('platinum-avatar', [80000, 180000])
  },
  {
    rankName: 'Diamond',
    minBalanceRank: 'from 1M',
    hamsterImageSrc: '/assets/hamsters/diamond.png',
    rankBackground: '135deg, #187B8B, #124BA9',
    players: generatePlayers('diamond-avatar', [100000, 250000])
  },
  {
    rankName: 'Epic',
    minBalanceRank: 'from 2M',
    hamsterImageSrc: '/assets/hamsters/epic.png',
    rankBackground: '135deg, #3C3787, #8342A3',
    players: generatePlayers('epic-avatar', [150000, 400000])
  },
  {
    rankName: 'Legendary',
    minBalanceRank: 'from 10M',
    hamsterImageSrc: '/assets/hamsters/legendary.png',
    rankBackground: '135deg, #337B7E, #168271',
    players: generatePlayers('legendary-avatar', [200000, 800000])
  },
  {
    rankName: 'Master',
    minBalanceRank: 'from 50M',
    hamsterImageSrc: '/assets/hamsters/master.png',
    rankBackground: '135deg, #092E83, #178C93',
    players: generatePlayers('master-avatar', [500000, 1400000])
  },
  {
    rankName: 'Grandmaster',
    minBalanceRank: 'from 100M',
    hamsterImageSrc: '/assets/hamsters/grandmaster.png',
    rankBackground: '135deg, #2E3D89, #1C27A3',
    players: generatePlayers('grandmaster-avatar', [700000, 2100000])
  },
  {
    rankName: 'Lord',
    minBalanceRank: 'from 1B',
    hamsterImageSrc: '/assets/hamsters/lord.png',
    rankBackground: '135deg, #8B7B6D, #966538',
    players: generatePlayers('lord-avatar', [1500000, 3000000])
  },
  {
    rankName: 'Creator',
    minBalanceRank: 'from 18B+',
    hamsterImageSrc: '/assets/hamsters/creator.png',
    rankBackground: '135deg, #336089, #9D7E6E',
    players: generatePlayers('creator-avatar', [2500000, 5000000])
  },

]