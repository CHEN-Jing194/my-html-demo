// 有个问题，屏幕宽是不确定的
// 获取两种dom
let banner = document.querySelector(".animated-banner")
let imgs = document.querySelectorAll("img")

// 鼠标移入事件，并记录此时位置
banner.addEventListener("mouseenter", function (e) {
  this.x = e.clientX;
  imgs.forEach(item => {
    item.style.transition = 'none'
  })
})
// 鼠标移动事件，计算与起始点距离，并给各图片加上
banner.addEventListener("mousemove", function (e) {
  this._x = e.clientX;
  let disX = this._x - this.x;

  // 根据距离按比例移动图片

  // 图片1
  //        位移    translate
  // 初始   0       0
  // 终末   1519.2  100
  // dis    1519.2  100
  let translateX_1 = disX * 100 / 1519.2;
  imgs[0].style.transform = `scale(1) translate(${-translateX_1}px, -15px) rotate(0deg)`;

  // 图片2
  //        位移    translate
  // 初始   0       1100
  // 终末   1519.2  1000 
  // dis    1519.2  -100
  let translateX_2 = (disX * -100 / 1519.2) + 1100;
  imgs[1].style.transform = `scale(1) translate(${translateX_2}px, 0px) rotate(0deg)`;

  // 图片3
  //        位移    translate
  // 初始   0       675
  // 终末   1519.2  540
  // dis    1519.2  -135
  let translateX_3 = (disX * -135 / 1519.2) + 675;
  imgs[2].style.transform = `scale(1) translate(${translateX_3}px, 0px) rotate(0deg)`;

  // 图片4
  //        位移    translate
  // 初始   0       -637
  // 终末   1519.2  -1077
  // dis    1519.2  -440
  let translateX_4 = (disX * -440 / 1519.2) - 637;
  imgs[3].style.transform = `scale(1) translate(${translateX_4}px, 0px) rotate(0deg)`;

  // 图片5
  //        位移    translate
  // 初始   0       607.5
  // 终末   1519.2  495
  // dis    1519.2  -112.5
  let translateX_5 = (disX * -112.5 / 1519.2) + 607.5;
  imgs[4].style.transform = `scale(1) translate(${translateX_5}px, 45px) rotate(0deg)`;

  // 图片6
  //        位移    translate   位移  opacity
  // 初始   0       252         0     0
  // 终末   1519.2  196       228.5 1
  // dis    1519.2  -56       228.5 1
  let translateX_6 = (disX * -200 / 1519.2) + 252;
  let opacity_6 = disX > 0 ? (disX > 228.5 ? 1 : (disX / 228.5)) : 0;
  imgs[5].style.cssText = `transform:scale(1) translate(${translateX_6}px, 36.4px) rotate(0deg);opacity:${opacity_6}`;
  // 图片7
  let translateX_7 = (disX * -100 / 1519.2) + 112;
  imgs[6].style.transform = `scale(1) translate(${translateX_7}px, 14px)`;
  // 图片8
  let translateX_8 = (disX * -100 / 1519.2) - 350;
  imgs[7].style.transform = `scale(1) translate(${translateX_8}px, 49px)`;
  // 图片9
  let translateX_9 = (disX * -400 / 1519.2) - 240;
  let opacity_9 = disX > 0 ? (disX > 300 ? 1 : (disX / 300)) : 0;
  imgs[8].style.cssText = `transform:scale(1) translate(${translateX_9}px, 16px) rotate(0deg);opacity:${opacity_9}`;
  // 图片10
  let translateX_10 = (disX * -250 / 1519.2) - 340;
  let opacity_10 = disX > 0 ? (disX > 300 ? 1 : (disX / 300)) : 0;
  imgs[9].style.cssText = `transform:scale(1) translate(${translateX_10}px, 32px) rotate(0deg);opacity:${opacity_10}`;
  // 图片11
  let translateX_11 = (disX * -250 / 1519.2) - 90;
  imgs[10].style.transform = `scale(1) translate(${translateX_11}px, 13.5px) rotate(0deg)`
  // 图片12
  let translateX_12 = (disX * -300 / 1519.2) + 100
  imgs[11].style.transform = `scale(1) translate(${translateX_12}px, 0px) rotate(0deg)`
  // 图片13
  let translateX_13 = (disX * -300 / 1519.2) + 216
  imgs[12].style.transform = `scale(1) translate(${translateX_13}px, 13.5px) rotate(0deg)`
  //图片14
  let translateX_14 = (disX * -800 / 1519.2) + 2100
  imgs[13].style.transform = `scale(1) translate(${translateX_14}px, 0px) rotate(0deg)`
  // 图片15
  let translateX_15 = (disX * -800 / 1519.2) - 1000
  imgs[14].style.transform = `scale(1) translate(${translateX_15}px, 0px) rotate(0deg)`
})

// 鼠标移出重置样式，注意添加过渡
banner.addEventListener("mouseleave", function (e) {
  // 增加过渡效果
  imgs.forEach(item => {
    item.style.transition = 'all 0.5s'
  })

  // 重置样式
  imgs[0].style.transform = 'scale(1) translate(0px, -15px) rotate(0deg)';
  imgs[1].style.transform = 'scale(1) translate(1100px, 0px) rotate(0deg)';
  imgs[2].style.transform = 'scale(1) translate(675px, 0px) rotate(0deg)';
  imgs[3].style.transform = 'scale(1) translate(-637px, 0px) rotate(0deg)';
  imgs[4].style.transform = 'scale(1) translate(607.5px, 45px) rotate(0deg)';
  imgs[5].style.cssText = 'transform:scale(1) translate(252px, 36.4px) rotate(0deg);opacity:0';
  imgs[6].style.transform = 'scale(1) translate(112px, 14px) rotate(0deg)';
  imgs[7].style.transform = `scale(1) translate(-350px, 49px) rotate(0deg)`
  imgs[8].style.cssText = 'transform: scale(1) translate(-240px, 16px) rotate(0deg); opacity: 0';
  imgs[9].style.cssText = 'transform: scale(1) translate(-340px, 32px) rotate(0deg); opacity: 0';
  imgs[10].style.transform = 'scale(1) translate(-90px, 13.5px) rotate(0deg)'
  imgs[11].style.transform = 'scale(1) translate(100px, 0px) rotate(0deg)'
  imgs[12].style.transform = 'scale(1) translate(216px, 13.5px) rotate(0deg)'
  imgs[13].style.transform = 'scale(1) translate(2100px, 0px) rotate(0deg)'
  imgs[14].style.transform = 'scale(1) translate(-1000px, 0px) rotate(0deg)'



})

/* canvas 樱花飘落 */
const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const _w = c.width, _h = c.height;
const scales = [0.03, 0.04, 0.05, 0.06, 0.07, 0.08];
const slen = scales.length - 1;
const speedX = 2, speedY = 3;
class flower {
  constructor() {
    this.x = Math.random() * _w;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.scale = 0;
    this.width = 0;
    this.height = 0;
    this.img = null
  }
  init() {
    this.img = new Image()
    const f = Math.random() * 10 > 5 ? 1 : 0
    const si = Math.floor(Math.random() * slen)
    this.speedX = Math.random() * speedX
    this.speedY = Math.random() * speedY
    this.scale = scales[si]
    this.width = this.height = 250 * this.scale
    const src = f ? "./img/bilibili-spring-flow-1.png" : './img/bilibili-spring-flow-2.png';
    this.img.src = src
  }
  draw(ctx) {
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  move(ctx) {
    // 这一步可以改成到底就将该flower移出数组，相应的下边move函数也要进行修改
    this.x = this.x + this.speedX >= _w ? Math.random() * _w : this.x + this.speedX;
    this.y = this.y >= _h ? 0 : this.y + this.speedY;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}
const flowers = []
function start() {
  const max = 50;
  for (let i = 0; i < max; i++) {
    const f = new flower()
    f.init()
    f.draw(ctx)
    flowers.push(f)
  }
}
function move() {
  ctx.clearRect(0, 0, _w, _h)
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].move(ctx)
  }
  window.requestAnimationFrame(move)
}
start()
move()