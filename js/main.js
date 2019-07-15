
var tl = new TimelineMax();


// ico1-pass circle and key appear

  function circle1() {
    var tl = new TimelineMax ();
    tl.from('#grey-circle', 0.5, {scale: 0, opacity: 0, transformOrigin: "bottom", ease: Power2.easeOut})
      .from('#key', 0.5, {scale: 0, opacity: 0, transformOrigin: "bottom", ease: Power2.easeOut})
      .from ('#white-line', 0.5, {width:0})
      .from ('#red-dot', 0.1, {width:0})
      .from ('#grey-line', 0.5, {width:0 , delay:0.2, ease: Back.easeOut.config(1.7)})
      return tl;
    }



// ico2-face appears
      function circle2() {
        var tl = new TimelineMax ();
        tl.from('#grey-circle2', 0.5, {scale: 0, opacity: 0, transformOrigin: "bottom", ease: Power4.easeOut})
          .from ('#tablet', 0.5, {height:0 , delay:0.2, ease: Back.easeOut.config(1.7)})
          .from('#red-circle', 0.5, {scale: 0, opacity: 0, ease: Power2.easeOut}, "tablet")
          .from('#scan', 0.8, {x:-50,scale: 0, opacity: 0,rotation: '-180',  transformOrigin: '0% 20%', ease: Power4.easeOut} , "tablet")
          .from('#face-shape', 0.5, {opacity: 0, ease: Power2.easeOut})
          .from('#face', 0.8, {x:10, opacity: 0, ease: Power2.easeOut}, "face")
          .from('#eye', 0.8, {x:10,opacity: 0, ease: Power2.easeOut}, "face")
          .to('#face', 0.2, {opacity: 1, ease: Power2.easeOut})

          return tl;
        }

// ico3-pin appears
      function circle3() {
          var tl = new TimelineMax ();
                tl.from('#grey-circle3', 0.5, {scale: 0, opacity: 0, transformOrigin: "bottom", ease: Power4.easeOut})
                  .from ('#white-fill', 0.5, {height:0 , delay:0.2, ease: Back.easeOut.config(1.7)})
                  .from('#pin', 0.5, {scale: 0, opacity: 0, ease: Power2.easeOut})
                  .from('#red-dot3', 0.5, {opacity: 0,  ease: Power2.easeOut})
                  .from('#padlock', 0.5, {scale: 0, opacity: 0, transformOrigin: '50% 50%', ease: Power2.easeOut, rotation: '-=360'})
                  return tl;
                }


      tl.add(circle1(), "0")
      .add(circle2(), "2.5")
      .add(circle3(), "5.5")
