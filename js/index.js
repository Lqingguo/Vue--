
window.onload = function () {
  let guideItems = document.querySelectorAll('footer .guide-item');
  let sections = document.querySelectorAll('#content section');
  guideItems.forEach(function (item, index) {
    item.onclick = function () {
      // 1. 清除所有元素身上的active
      guideItems.forEach(function (item, index) {
        item.className = 'guide-item'
        sections[index].className = ''
      })

      // 2. 给当前触发事件的元素添加active
      this.className = 'guide-item active'
      sections[index].className = 'on'
    }
  });
  let mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    pagination: {
      el: '.swiper-pagination',
    }
  })
    let grade = 3.7;
   document.querySelector('.grade').innerHTML = grade
   let onCount = Math.floor(grade);
   let halfCount = Math.round(grade - onCount);
   let starts = document.querySelectorAll('.start');

   for(let i = 0 ; i< starts.length; i++){
     if( i < onCount){
       starts[i].className = 'start on'
     }else if(i < onCount + halfCount){
       starts[i].className = 'start half'
     }else {
       starts[i].className = 'start off';
     }
   }
};