const claimHandler = () => {
  const daysWrapper = document.querySelector('.modal-days__wrapper')
  const obj = openedMyCardsObj
  //console.log(obj)
  earnData[obj.id].claimDays.push(obj.currentDayId)
  balance += obj.days[obj.currentDayId].prize
  earnData[obj.id].currentDayId++
  daysWrapper.innerHTML = renderDays()
  hide()
}