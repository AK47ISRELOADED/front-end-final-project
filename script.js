gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
















gsap.from("#page1 h1", {
  duration: 0.5,
  onStart: function () {
      $('#page1 h1').textillate({
          in: {
              effect: 'fadeInUp'
          }
      });
  }
})

gsap.from("#page2 h1", {
 
  duration: 0.1,
  onStart: function () {
      $('#page2 h1').textillate({
          in: {
              effect: 'fadeInUp'
          }
      });
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2 h1",
    scrub:true,

  }
})

gsap.from("#page2 h2", {

  duration: 0.1,
  onStart: function () {
      $('#page2 h2').textillate({
          in: {
              effect: 'fadeInUp'
          }
      });
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2 h2",
    scrub:true,

  }
})

gsap.from("#page3 h1", {

  duration: 0.1,
  onStart: function () {
      $('#page3 h1').textillate({
          in: {
              effect: 'fadeInUp'
          }
      });
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3 h1",
    scrub:true,

  }
})


gsap.from("#page3 h2", {

  duration: 0.1,
  onStart: function () {
      $('#page3 h2').textillate({
          in: {
              effect: 'fadeInUp'
          }
      });
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3 h2",
    

  }
})




var ovl = document.querySelector("#overlay");
var scr = document.querySelector("#scr");

ovl.addEventListener("mouseenter",function(){
    scr.style.scale = 1
})

ovl.addEventListener("mouseleave",function(){
    scr.style.scale = 0
})

ovl.addEventListener("mousemove",function(dets){
    scr.style.top = `${dets.y-50}px`;
    scr.style.left = `${dets.x-50}px`;
})

gsap.to("#page2 img",{
    rotate : 5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        start:"top 60%",
        scrub:2

    }

})



var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -200%",
      scrub: true,
  }
})



tl.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#111",

})

tl.to("#nav h3", {
  color: "#111",
  // background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})


var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -270%",
      end: "top -27%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav h3", {
  color: "#fff",
  // background: "linear-gradient(#000000d5,#00000089,#00000000)",
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -140%",
      scrub: true,
  }
})

tl.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#111",

})


tl.to("#nav h3", {
  color: "#111",
  // background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})

// Make a timeline again to change color of nav and svg to white

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -340%",
      end: "top -340%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav h3", {
  color: "#fff",
  // background: "linear-gradient(#000000d5,#00000089,#00000000)",
})




// gsap.to("svg",{
//   scale:1,
//   top:"5%",
 
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"svg",
//     start:"top 1%",
//     end:"top -15%",   
//     scrub:true,    
//   }
// })
// gsap.to("svg",{
//   fill:"#111",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"svg",
//     start:"top -48%",
//     end:"top -48%",
//     scrub:true,
//   }
// })
// gsap.to("svg",{
//   fill:"#fff",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"svg",
//     start:"top -262%",
//     end:"top -262%",
//     scrub:true,
//   }
// })

// gsap.to("svg",{
//   fill:"#111",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"svg",
//     start:"top -1118%",
//     end:"top -1118%",
//     scrub:true,
//   }
// })
// gsap.to("svg",{
//   fill:"#fff",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"svg",
//     start:"top -1220%",
//     end:"top -1220%",
//     scrub:true,
//   }
// })



// gsap.to("#nav h3",{
//   color:"black",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#nav h3",
//     start:"top -95%",
//     end:"top -95%",
//     scrub:true,
//   }
// })

// gsap.to("#nav h3",{
//   color:"#fff",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#nav h3",
//     start:"top -306%",
//     end :"top -306%",
//     scrub:true,
//   }
// })

// gsap.to("#nav h3",{
//   color:"#111",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#nav h3",
//     start:"top -1164%",
//     end :"top -1164%",
//     scrub:true,
//   }
// })
// gsap.to("#nav h3",{
//   color:"#fff",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#nav h3",
//     start:"top -1265%",
//     end :"top -1265%",
//     scrub:true,
//   }
// })





var page3 = document.querySelector("#page3");
var mofo = document.querySelector("#mofo");

page3.addEventListener("mouseenter",function(){
  mofo.style.opacity = 1
})
page3.addEventListener("mouseleave",function(){
  mofo.style.opacity = 0
})

page3.addEventListener("mousemove",function(dets){
  mofo.style.top = `${dets.y}px`;
  mofo.style.left = `${dets.x}px`;
})




var foto = document.querySelector("#page4>img");
var butt = document.querySelector("#page4>button");

document.querySelector("#page4").addEventListener("mousemove",function(dets){
  foto.style.top = (dets.y-150)+"px";
  foto.style.left = (dets.x-150)+"px";
  butt.style.top = (dets.y-20)+"px";
  butt.style.left = (dets.x-80)+"px";
})

// gsap.from("#peheli",{
//   rotate:"-5deg",
//   y:100,
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#peheli",
//     start:"top 89%",
//     end:"top 80%",
//     // markers:true,
  
//   //  pin:"img",
//     scrub:1,
//   }
// })

gsap.from("#dusri",{
  rotate:"-5deg",
  y:600,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#dusri",
    start:"top 80%",
    end:"top 50%",
    // markers:true,
  
  //  pin:"img",
    scrub:2,
  }
})


gsap.to("#page6",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    start:"top 0%",
    end:"top -100%",
    pin:true,
    scrub:true,
  }
})






var elem =  document.querySelectorAll(`.elem`)

elem.forEach(function(e){
  var a = e.getAttribute("data-img")
  e.addEventListener("mouseenter",function(){
    document.querySelector("#page4>img").setAttribute("src",a)
  })
})



var page7 = document.querySelector("#page7");
var mofo2 = document.querySelector("#mofo2");

page7.addEventListener("mouseenter",function(){
  mofo2.style.opacity = 1
})
page7.addEventListener("mouseleave",function(){
  mofo2.style.opacity = 0
})

page7.addEventListener("mousemove",function(dets){
  mofo2.style.top = `${dets.y+65}px`;
  mofo2.style.left = `${dets.x}px`;
})






var img1 = document.querySelector(".imge1");
var scr2 = document.querySelector("#scr2");

img1.addEventListener("mouseenter",function(){
  scr2.style.scale = 1;
})

img1.addEventListener("mouseleave",function(){
  scr2.style.scale = 0;
})

img1.addEventListener("mousemove",function(dets){
  scr2.style.top = `${dets.y-50}px`;
  scr2.style.left = `${dets.x-50}px`;

})


var img2 = document.querySelector(".imge2");
var scr2 = document.querySelector("#scr2");

img2.addEventListener("mouseenter",function(){
  scr2.style.scale = 1;
})

img2.addEventListener("mouseleave",function(){
  scr2.style.scale = 0;
})

img2.addEventListener("mousemove",function(dets){
  scr2.style.top = `${dets.y-50}px`;
  scr2.style.left = `${dets.x-50}px`;

})



var img3 = document.querySelector(".imge3");
var scr2 = document.querySelector("#scr2");

img3.addEventListener("mouseenter",function(){
  scr2.style.scale = 1;
})

img3.addEventListener("mouseleave",function(){
  scr2.style.scale = 0;
})

img3.addEventListener("mousemove",function(dets){
  scr2.style.top = `${dets.y-50}px`;
  scr2.style.left = `${dets.x-50}px`;

})




var i = document.querySelector("#nav i");
var fs = document.querySelector("#full-scr");
var fsi = document.querySelector("#full-scr i");

i.addEventListener("click",function(){
  fs.style.top= "0vh";
})


fsi.addEventListener("click",function(){
 fs.style.top= "-100vh";
})