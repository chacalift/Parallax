// JavaScript Document

// --------------- FIXA MENU -----------------
var tela = $(window).height();//comando para pegar a altura da tela em pixels do navegador
$(window).scroll(function(){
	if($(this).scrollTop()>tela - 60){
		$("nav").addClass("fixamenu")
	}else{
		$("nav").removeClass("fixamenu")
	}
})

//--------------------------EFEITO PARALLAX--------------------------
$(function(){
	$("#home").click(function(){
		$("html").animate({scrollTop:0}, 1000)
	})
$("#pag1").click(function(){
		$("html").animate({scrollTop:$("#sobre").offset().top}, 1000)
	})
	$("#pag2").click(function(){
		$("html").animate({scrollTop:$("#habilidades").offset().top}, 1000)
		})
	$("#pag3").click(function(){
		$("html").animate({scrollTop:$("#portifolio").offset().top}, 1000)
		})
	$("#pag4").click(function(){
		$("html").animate({scrollTop:$("#contato").offset().top}, 1000)
		})
	})

//-------------------------EFEITO ANIMA HABILIDADES------------------------
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>2*tela){
           $(".html").addClass("animahtml")    
           $(".css").addClass("animacss")    
           $(".js").addClass("animajs")    
           $(".front").addClass("animafront")    
           $(".psd").addClass("animapsd")    
           $(".ai").addClass("animaai")    
           }else{
             $(".html").removeClass("animahtml")    
           $(".css").removeClass("animacss")
           $(".js").removeClass("animajs")
           $(".front").removeClass("animafront")
           $(".psd").removeClass("animapsd")
           $(".ai").removeClass("animaai")
          }
    })
})

//-----------------------EFEITOS GALERIA SLICK-----------------
$(function(){
    $(".galeria").slick({
        slidesToShow: 4,
        autoplay:true,
        dots:true
   })
})