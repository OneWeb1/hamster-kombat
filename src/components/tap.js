const tapWrappers = document.querySelectorAll('.tap-wrapper')

setTimeout(() => {
  tapWrappers.forEach(tapWrapper =>
  {
    const ceilItem = tapWrapper.querySelector('.ceil-item')
    const tapWrapperBox = tapWrapper.getBoundingClientRect()
    const tapWrapperCenterX = tapWrapperBox.x + tapWrapperBox.width / 2
    const tapWrapperCenterY = tapWrapperBox.y + tapWrapperBox.height / 2
    const radius = tapWrapperBox.width / 2

    let positions = []


    let touchesLength = 1
    let lastTouchesLength = 2

    const tapEndHandler = (e) => {
      if (!tapWrapper.contains(e.target)) return
      if (!(energyNumber - profitTap >= 0)) return

      const x = e.changedTouches[0].clientX
      const y = e.changedTouches[0].clientY
      const number = document.createElement('div')
      const dx = x - tapWrapperCenterX;
      const dy = y - tapWrapperCenterY;
      const maxRotation = 20
      const angleX = (dy / tapWrapperCenterY) * maxRotation;
      const angleY = (dx / tapWrapperCenterX) * maxRotation;

      ceilItem.style.transition = 'transform .1s cubic-bezier(0.19, 1, 0.22, 1)';
      ceilItem.style.transform = `rotateX(${angleX*2.5}deg) rotateY(${-angleY}deg)`;
      number.textContent = `+${profitTap}`
      number.classList.add('tap-number')
      number.style.left = x + 'px'
      number.style.top = y - 20 + 'px'
      document.body.appendChild(number)
      balance += energyNumber >= profitTap ? profitTap : 0
      energyNumber -= profitTap
      energyNumberWrappers.forEach(energyNumberWrapper => {
        energyNumberWrapper.textContent = energyNumber
      })
      balanceWrappers.forEach(balanceWrapper => {
        balanceWrapper.textContent = formatNumber(balance)
      })
      setCurrentLevelPoint()
      levelRowChilds.forEach(levelRowChild => {
        levelRowChild.style.width = (balance / currentLevelPoint) * 100 + '%'
      })
      setTimeout(() => {
        ceilItem.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
      }, 100)
      setTimeout(() => {
        document.body.removeChild(number)
      }, 900)
    }
    tapWrapper.addEventListener('touchmove', e => {
      e.preventDefault()
    })

    window.addEventListener('touchend', tapEndHandler)
  })

  setTimeout(() => {
    const mine = document.querySelector('.mine')
    //mine.classList.remove('mine-start')
  }, 1000)
})