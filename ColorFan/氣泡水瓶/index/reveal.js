window.sr = ScrollReveal({ reset: false, viewFactor: 0.5,mobile: true,
      delay: 200 });
    //從小淡入變大//
sr.reveal('.smalltobig', { interval: 350, scale: 0.5, beforeReveal: rubberBand});
    //從小往上淡入//
sr.reveal('.bottomtotop', { interval: 300, delay: 1000, distance: '80px', viewFactor: 0.5 });
    //彈出來//
sr.reveal('.pop', { interval: 200, beforeReveal: bounceIn });
   //延遲震一下//
sr.reveal('.aftermove', { interval: 300, delay: 400, afterReveal: bounce });
   //簡單小淡入//
sr.reveal('.fadein', { interval: 150, delay: 300, viewFactor: 0.3 });

sr.reveal('.bottomtotop1', { interval: 300, distance: '80px', viewFactor: 0.5,
delay: 0  });


function rubberBand(el) {
  $(el).addClass('rubberBand');
}
function bounceIn(el) {
  $(el).addClass('bounceIn');
}
function bounce(el) {
  $(el).addClass('bounce');
}


