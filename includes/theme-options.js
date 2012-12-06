// JavaScript Document
jQuery(document).ready(function($){
	
	$(".rwd-container").hide();

	$("h3.rwd-toggle").click(function(){
	$(this).toggleClass("active").next().slideToggle("fast");
		return false; //Prevent the browser jump to the link anchor
	});

});
jQuery(document).ready(function ($) {
    setTimeout(function () {
        $(".fade").fadeOut("slow", function () {
            $(".fade").remove();
        });

    }, 2000);
});
//Add mosaic functionality to the page
		jQuery(function($){
				
				$('.circle').mosaic({
					opacity		:	0.8			//Opacity for overlay (0-1)
				});
				
				$('.fade').mosaic();
				
				$('.bar').mosaic({
					animation	:	'slide'		//fade or slide
				});
				
				$('.bar2').mosaic({
					animation	:	'slide'		//fade or slide
				});
				
				$('.bar3').mosaic({
					animation	:	'slide',	//fade or slide
					anchor_y	:	'top'		//Vertical anchor position
				});
				
				$('.cover').mosaic({
					animation	:	'slide',	//fade or slide
					hover_x		:	'400px'		//Horizontal position on hover
				});
				
				$('.cover2').mosaic({
					animation	:	'slide',	//fade or slide
					anchor_y	:	'top',		//Vertical anchor position
					hover_y		:	'80px'		//Vertical position on hover
				});
				
				$('.cover3').mosaic({
					animation	:	'slide',	//fade or slide
					hover_x		:	'400px',	//Horizontal position on hover
					hover_y		:	'300px'		//Vertical position on hover
				});
		    
		    });
