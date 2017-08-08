jQuery(document).ready(function($j){ 
	$j('.flexslider').flexslider({
		animation: "slide",
		animationSpeed: 400,
		controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		customDirectionNav: $j(".custom-navigation a"),
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
		direction: "vertical",
		minItems: 6,
		move: 1
    });
});