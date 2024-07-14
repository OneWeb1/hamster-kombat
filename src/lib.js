const random = (min, max) => {
  return Math.random() * (max - min) + min
}

const toMinified = (num) => {
  if(!num) return 0
  if(num < 1000) return `${num.toFixed(2)}`
  if(num < 1000000) return `${(num /1000).toFixed(2)}K`
  else if(num > 1000000 && num < 1000000000) return `${(num /1000000).toFixed(2)}M` 
  else return `${(num /1000000000).toFixed(2)}B` 
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
    } else {
      let millions = Math.floor(number / 1000000);
      let remainder = number % 1000000;
      let thousands = Math.floor(remainder / 1000);
      let hundreds = remainder % 1000;
      return `${millions},${thousands.toString().padStart(3, '0')},${hundreds.toString().padStart(3, '0')}`;
    }
  } catch (error) {
    return "Error: " + error.message;
  }
}

