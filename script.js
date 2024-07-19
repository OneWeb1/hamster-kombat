

function extractClasses(htmlCode) {
  // Знайти всі входження патерну класів в HTML коді
  const classPattern = /class="([^"]*)"/g;
  let classes = [];
  let match;

  while ((match = classPattern.exec(htmlCode)) !== null) {
    classes.push(match[1]);
  }

  // Створити стилі для CSS файлу
  let cssStyles = classes.map(className => `.${className} {}`);

  // Повернути результат у вигляді одного рядка зі стилями
  return cssStyles.join("\n");
}

// Приклад використання:
const htmlCode = `<div class="boost-header">
      <div class="boost-title">Your balance</div>
    </div> <
div class = "balance-wrapper" >
<img class="money" src="/assets/money.jpg" alt="" /> <
span class = "balance" > 263, 659, 622 < /span> <
  /div> <
  span class = "boost-text__works" > How a boost works < /span> <
  div class = "boost-ups__wrapper" >
  <span class="boost-title">Free daily boosters</span> <
  div class = "boost-box" >
  <div class="boost-box__left-wrapper">
          <img src="/assets/boosts/energy.png" alt="icon" />
          <div class="boost-box__right-content">
            <div class="boost-box__text">Full energy</div>
            <div class="boost-box__value">
              6/6 available
            </div>
          </div>
        </div> <
  /div> <
  /div>`
const cssStyles = extractClasses(htmlCode);
console.log(cssStyles);
