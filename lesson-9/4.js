const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

const scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);

console.log(document.documentElement.clientWidth + 'px = ширина видимой части веб-страницы');
console.log(document.documentElement.clientHeight + 'px = высота видимой части веб-страницы');
console.log(Math.floor(document.documentElement.clientWidth / 60) * Math.floor(document.documentElement.clientHeight / 60) + ' квадратов поместится в видимой области страницы');
console.log(scrollWidth + 'px = ширина всей веб-страницы');
console.log(scrollHeight + 'px = высота всей веб-страницы');
console.log(Math.floor(scrollWidth / 60) * Math.floor(scrollHeight / 60) + ' квадратов поместится в области просмотра страницы');