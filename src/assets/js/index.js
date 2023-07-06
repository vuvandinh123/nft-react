let search=document.querySelector('#search')
let input=document.querySelector('#input-search')

function showLoading() {
  document.getElementById("loading").classList.add("active");
}

// to top

let totop = document.querySelector('.totop');
window.addEventListener('scroll',()=>{
  if(this.scrollY > 600){
    totop.style.display = 'block';
    totop.addEventListener('click',()=>{
      window.scrollTo(0, 0);
    })
  }
  else{
    totop.style.display = 'none';
  }
})
totop.addEventListener('click',()=>{

})


// Ẩn loading
function hideLoading() {
  document.getElementById("loading").classList.remove("active");
}
window.addEventListener('beforeunload', function() {
  showLoading(); // Hiển thị loading trước khi tải lại trang
});
window.addEventListener('load', function() {
  hideLoading(); // Ẩn loading khi trang đã được tải xong
});

let close_nav=document.querySelector('#close')
let nav=document.querySelector('#nav')
let bars=document.querySelector('#bars')

bars.addEventListener('click',()=>{
    nav.classList.toggle('active')
    close_nav.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
})
search.addEventListener('click',()=>{
  input.classList.toggle('active');
})

let close_search= document.querySelector('.close-search-mb')
close_search.addEventListener('click',()=>{
  document.querySelector('.form-search-mb').classList.remove('active')
})


// dark mod 
let darkmod = document.querySelector('#darkmod');
let body=document.querySelector('body')
 darkmod.addEventListener('change', function() {
  if(darkmod.checked){
    body.classList.remove('darkmod')
   darkmod.nextElementSibling.classList.add('fa-moon')
   darkmod.nextElementSibling.classList.remove('fa-sun')
  } else {
    body.classList.add('darkmod')
    darkmod.nextElementSibling.classList.remove('fa-moon')
    darkmod.nextElementSibling.classList.add('fa-sun')
  }
});

let heart=document.querySelectorAll('.card-heart');
heart.forEach(e => {
  e.addEventListener('click',()=>{
    let check= e.querySelector('img')
    if(check.classList.contains('red')){
  
      e.querySelector('img').src = '../public/images/Heart2.png'
      check.classList.remove('red')
    }
    else{
      e.querySelector('img').src = '../public/images/Heart.png'
      check.classList.add('red')
    }
  })
});

document.getElementById('prev').onclick=function(){
  const widthItem= document.querySelector('.category-card-item').offsetWidth;
  document.querySelector('.category-content').scrollLeft -= widthItem;
}
document.getElementById('next').onclick=function(){
  const widthItem= document.querySelector('.category-card-item').offsetWidth;
  document.querySelector('.category-content').scrollLeft += widthItem ;
}
// arrow 2
document.getElementById('prev2').onclick=function(){
  const widthItem= document.querySelector('.artist-item').offsetWidth;
  document.querySelector('.artist-content').scrollLeft -= widthItem;
}
document.getElementById('next2').onclick=function(){
  const widthItem= document.querySelector('.artist-item').offsetWidth;
  document.querySelector('.artist-content').scrollLeft += widthItem;
}


let counDown = new Date ("2023-04-20T12:00:00").getTime();
let x = setInterval(()=>{
  let now = new Date().getTime();
  let distance = counDown - now;

  let days = Math.floor(distance /  (1000 * 60 * 60 * 24));
  let Hours = Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
  let minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance %  (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML=days
  document.querySelector('.hours').innerHTML=Hours
  document.querySelector('.minutes').innerHTML=minutes
  document.querySelector('.seconds').innerHTML=seconds

},1000)

let cardTime= document.querySelectorAll('.card-time h5')

// sale time card
cardTime.forEach(e=>{
  let t = Math.ceil(Math.random()*12)
  let m = Math.floor(Math.random()*60)
  let s = Math.floor(Math.random()*60)
    
  let counDown2 = new Date (`April 20, 2023 ${t}:${m}:${s}`).getTime();
  let y = setInterval(()=>{


    let now = new Date().getTime();
    let distance = counDown2 - now;
    let Hours = Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
    let minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance %  (1000 * 60)) / 1000);
  
  
    e.querySelector('.card-hours').innerHTML=Hours
    e.querySelector('.card-min').innerHTML=minutes
    e.querySelector('.card-sec').innerHTML=seconds

  },1000)
  
})

// header stcky
let h=  document.querySelector('.header')
let se=  document.querySelector('.search_collections')

  if(h.offsetTop==30){
    h.classList.add('sticky')
    darkmod.addEventListener('change', function() {
      if(darkmod.checked){
        se.style.backgroundColor='#ffff'
      } else {
        se.style.background='#06000B'
      }
    });
  }
  window.addEventListener('scroll',()=>{
    if(this.scrollY == 0){
      h.style.top = '30px'
      body.classList.contains('darkmod') ? se.style.backgroundColor='#06000B' : se.style.backgroundImage='linear-gradient(to right, #FAF1FF,#fff)';
    }
    if(this.scrollY > 0){
      h.classList.add('sticky')
      h.style.top = '0'
      body.classList.contains('darkmod') ? se.style.background='#131528' : se.style.background='#ffff';
    }
    else{
      h.classList.remove('sticky')
  
    }
    
  })

let follow = document.querySelectorAll('.follow')


follow.forEach(e=>{
  e.innerHTML = 'Follow'
  e.classList.remove('un')
  e.addEventListener('click',()=>{

    e.classList.toggle('un')
    if(!e.classList.contains('un')){
      e.innerHTML = 'Follow'
    }
    else{
      e.innerHTML = 'Unfollow'
    }
  })
})