//background parallax
$('document').ready(function(){
    const elem = document.getElementById("parallax");
    //console.log(elem);

    elem.addEventListener("mousemove", e => {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    });
//background parallax

//card1 paralax//
var card1 = $(".card-parallax-1");
var parent = card1.parent();
var fieldOfView = (innerWidth / innerHeight) * 16;

$(card1).on("mouseenter",function(e) {  
    $(card1).on("mousemove",function(e) {  

        const {offsetX, offsetY} = e;

        let X;
        let Y;

        X = ((offsetX - (card1.width()/2)) / 3) / 3;
        Y = (-(offsetY - (card1.height()/2)) / 3) / 3;
        card1.css("transform", "rotateY("+ X +"deg) rotateX("+ Y +"deg)");
    });
});

$(card1).on("mouseleave",function(e) { 
    //console.log('mouseleave');
    card1.css("transform", "rotateY("+ 0 +"deg) rotateX("+ 0 +"deg)");
});
//card1 paralax//

//card2 paralax//
var card2 = $(".card-parallax-2");
var parent = card2.parent();
var fieldOfView = (innerWidth / innerHeight) * 16;

$(card2).on("mouseenter",function(e) {  
    $(card2).on("mousemove",function(e) {  

        const {offsetX, offsetY} = e;

        let X;
        let Y;

        X = ((offsetX - (card2.width()/2)) / 3) / 3;
        Y = (-(offsetY - (card2.height()/2)) / 3) / 3;
        card2.css("transform", "rotateY("+ X +"deg) rotateX("+ Y +"deg)");
    });
});

$(card2).on("mouseleave",function(e) { 
    //console.log('mouseleave');
    card2.css("transform", "rotateY("+ 0 +"deg) rotateX("+ 0 +"deg)");
});
//card2 paralax//

//card3 paralax//
var card3 = $(".card-parallax-3");
var parent = card3.parent();
var fieldOfView = (innerWidth / innerHeight) * 16;

$(card3).on("mouseenter",function(e) {  
    $(card3).on("mousemove",function(e) {  

        const {offsetX, offsetY} = e;

        let X;
        let Y;

        X = ((offsetX - (card3.width()/2)) / 3) / 3;
        Y = (-(offsetY - (card3.height()/2)) / 3) / 3;
        card3.css("transform", "rotateY("+ X +"deg) rotateX("+ Y +"deg)");
    });
});

$(card3).on("mouseleave",function(e) { 
    //console.log('mouseleave');
    card3.css("transform", "rotateY("+ 0 +"deg) rotateX("+ 0 +"deg)");
});
//card3 paralax//



});

