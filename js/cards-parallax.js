$('document').ready(function(){

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