const random = (min, max) => {
  return Math.random() * (max - min) + min
}




const toMinified = (num) => {
  if (!num) return 0
  const values = ['00 ', '00K', '00M', '00B', '00T']
  let fixNum = 2
  let value = 0
  if(Number.isInteger(num) && num % 1000 === 0) {
    //fixNum = 0
  }
  if (num < 1000) return`${num.toFixed(0)}`
  if (num < 1000000) value = `${(num /1000).toFixed(fixNum)}K`
  else if (num >= 1000000 && num < 1000000000) value= `${(num /1000000).toFixed(fixNum)}M`
  else if (num >= 1000000000 && num < 1000000000000) value= `${(num /1000000000).toFixed(fixNum)}B`
  else value= `${(num /1000000000000).toFixed(fixNum)}T`
  if(value.split('.')[1][1] == 0 && value.split('.')[1][0]>0) return value.split('.')[0]+'.'+value.split('.')[1][0]+value.split('.')[1][2]
  else if(values.includes(value.split('.')[1])) return value.split('.')[0]+value.split('.')[1][2]
  else return value
}


const formatNumber = (numberStr) => {
  try {
    let number = parseInt(numberStr);
    if (isNaN(number)) {
      throw new Error("Invalid number format");
    }

    if (number < 0) {
      return "-" + formatNumber(Math.abs(number).toString());
    }

    if (number < 1000) {
      return number.toString();
    } else if (number < 1000000) {
      let thousands = Math.floor(number / 1000);
      let remainder = number % 1000;
      return `${thousands},${remainder.toString().padStart(3, '0')}`;
    } else if (number < 1000000000) {
      let millions = Math.floor(number / 1000000);
      let remainder = number % 1000000;
      let thousands = Math.floor(remainder / 1000);
      let hundreds = remainder % 1000;
      return `${millions},${thousands.toString().padStart(3, '0')},${hundreds.toString().padStart(3, '0')}`;
    } else {
      let billions = Math.floor(number / 1000000000);
      let remainderMillions = number % 1000000000;
      let millions = Math.floor(remainderMillions / 1000000);
      let remainderThousands = remainderMillions % 1000000;
      let thousands = Math.floor(remainderThousands / 1000);
      let hundreds = remainderThousands % 1000;
      return `${billions},${millions.toString().padStart(3, '0')},${thousands.toString().padStart(3, '0')},${hundreds.toString().padStart(3, '0')}`;
    }
  } catch (error) {
    return "Error: " + error.message;
  }
}