	"use strict";

	var ViewWidth = document.documentElement.clientWidth;
	var cap = ViewWidth*0.285 +35;
	var h_hght = cap; // высота шапки
	var h_mrg = 3;    // отступ когда шапка уже не видна
                 
	$(function(){
 
    var elem = $('.buttonmenu');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght ) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
});

$(window).on("resize",function(){
	var ViewWidth = document.documentElement.clientWidth;
	var cap = ViewWidth*0.285 + 35;
	var h_hght = cap; // высота шапки
	var h_mrg = 3;    // отступ когда шапка уже не видна
                 
	$(function(){
 
    var elem = $('.buttonmenu');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    //$(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    //});
 
});
	})
		$(window).on("scroll",function(){
	var ViewWidth = document.documentElement.clientWidth;
	var cap = ViewWidth*0.285 + 35;
	var h_hght = cap; // высота шапки
	var h_mrg = 3;    // отступ когда шапка уже не видна
                 
	$(function(){
 
    var elem = $('.buttonmenu');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    //$(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    //});
 
});
	})