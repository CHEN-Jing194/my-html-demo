/* 获取元素 */
const lamp = document.getElementById("light-switch");
const topWindow = document.getElementById("window-top");
const mainWindow = document.getElementById("window-main");
const moon = document.getElementById('moon')
const light = document.getElementById('light')

const clouds = document.querySelectorAll('.c')
const stars = document.querySelectorAll('.s')

/* 监听点灯事件 */
lamp.addEventListener("click", () => {
  topWindow.classList.toggle("night")
  mainWindow.classList.toggle("night")
  clouds.forEach(c => {
    c.classList.toggle('hide-cloud')
  });
  stars.forEach(s => {
    s.classList.toggle('show-star')
  })
  moon.classList.toggle('show-moon')
  light.classList.toggle('show-light')
})