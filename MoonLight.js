let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let MoonLight = document.getElementById('MoonLight');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header')
window.onscroll = function(){
    let value = scrollY
    stars.style.left = value*0.5 + 'px';
    moon.style.top = value*1.05 + 'px';
    mountains_behind.style.top = value*0.5 + 'px';
    mountains_front.style.top = value*0 + 'px';
    MoonLight.style.marginRight = value*4 + 'px';
    MoonLight.style.marginTop = value*1.5 + 'px';
    btn.style.marginTop = value*1.5 + 'px';
    header.style.top = value*0.5 + 'px';
    
   
}