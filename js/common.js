
//menu size
$(function() {
	var menuW = eval(($(this).find('#Menu').css('width')).replace(/px/ig,''));
	var livol_ul = $('#Menu ul li').size();
	var livol_ol = $('#Menu ol li').size(); 
	var livol =  eval(livol_ul-livol_ol);
	if (menuW >= 500){
		var menuLiW =  parseInt(eval(menuW)/eval(livol));
		$('#Menu ul li').width(menuLiW);
	}
	$('#Menu ul').fadeIn("fast");
});

$(function() {
	$("#Menu li:last-child").addClass('last');
  });
  


//Menu Mouse Over
$(function(){
	$('#Menu ul li').mouseover(function(){
		$(this).addClass('on');
	});
	$('#Menu ul li').mouseout(function(){
		$(this).removeClass('on');
	});
});	

	
	
//Drop Down Menu	
$(function(){
	$('#Menu ol li:last-child').addClass('last');
	$('#Menu ul li').hover(function(){
		$("> ol:not(:animated)" , this).animate({
			height : "toggle",
			opacity : "toggle"
		}, 200 );
	},
	function(){
		$("> ol" , this).fadeOut("fast");
	});
});

//Scroll
jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
$(function(){
   $('a[href^=#]').click(function() {
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, 1000, 'quart');
      return false;
   });
});

//Top Image
/*$(function($){
	var mainImageH = $('#mainImage p> img').height();
	$('#mainImage').height(mainImageH);
	$('#mainImage .feedin').fadeIn(2000);	
});

$(function(mainimage){
var fadeSpeed = 3000;
var displayTime = 5000;
	var slides = new Array;
	$('#mainImage p.feedin').each(function(){
		var image = $(this).find('img').attr('src');
		var slide = $('<img>').attr('src', image)
			slides[slides.length] = slide;
			});
		var imgVol = 0;
		$('#mainImage p.feedin').html(slides[imgVol]);
			setInterval(function(){
			$('#mainImage p.feedin > img').fadeOut(fadeSpeed, function(){
				$(this).remove();
			});

		imgVol++;
		if (imgVol >= slides.length){
		imgVol = 0;
		}
		var image = slides[imgVol];
		$('#mainImage p.feedin').prepend(image.fadeIn(fadeSpeed));
	}, displayTime);

});*/

//footer menu
/*$(function() {
	$('div#footMenu li:not(:last-child)').append("|");
  });*/

//photo_list
$(function() {
	$('ul.photo_list li:last-child').addClass(".last");
  });

//Form input
$(function(){
	$('#contact input[type=text],#contact textarea').focus(function(){
		$(this).addClass('focus');
	}).blur(function(){
		$(this).removeClass('focus');
	});
});


//Copyright year
function displayYear() {
   var now = new Date();
   var year = now.getFullYear();
   document.write(year);
}


