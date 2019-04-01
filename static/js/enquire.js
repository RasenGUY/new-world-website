												// enquire baby!!
// select doms
			
// index
var applyIn1 = $('#index-apply-btn-1');
var indexHero = $('.index-hero');
var menuHeaderMob = $("#fh5co-header-section");
var logo = $('#fh5co-logo-word a div');
var call2Action = $('#call-to-action-btn');
var call2ActionList = $('.call-to-action-list-0');

// 	get involved

	// volunteering 
var volunteering = $('.volunteering');
var imgGal  = $('.img-gallery');
var imgGalOne = $('.img-gallery.one');

// enquire medium screen <- 
enquire.register("screen and (max-width: 1267px)", {
	match : function () {
		// get involved volunteering 
		//  change hero background position 
		volunteering.css('background-position-y', '-7rem');
	},
	unmatch: function () {
		// get involved volunteering 
		// change hero background image position reset
		volunteering.css('background-position-y', '-20rem');

	}
});

// enquire medium screen -> 
enquire.register("screen and (max-width: 768px)", {
	match: function () {

		//  index 

		// remove large button class 
		applyIn1.toggleClass('btn-lg');
		// add small button class
		applyIn1.toggleClass('btn-md');
		// change css of menuHeaderMob height -> 7rem
		menuHeaderMob.css('height', '7rem');
		// change css of logo box to 10.5 rem
		logo.css({'height': '10.5rem', 'width': '10.5rem'});
		// remove medium button class 
		call2Action.toggleClass('btn-sm');
		// change btn into smaller 
		call2Action.toggleClass('btn-md');
		// add spacing between call to action lists 
		call2ActionList.css('margin-bottom', '2rem');
		// hide img galleries
		imgGal.css('display', 'none');


	// get involved volunteering 
		// move background picture downward
		volunteering.css('background-position-y', '-10rem');






	},

	unmatch: function (){
		
		// remove small btn class
		applyIn1.toggleClass('btn-md');
		// add small btn class
		applyIn1.toggleClass('btn-lg');
		// change height back to normal
		menuHeaderMob.css('height', '');
		// visa versa logo box
		logo.css({'height': '', 'width': ''});
		// remove medium button class 
		call2Action.toggleClass('btn-sm');
		// change btn into smaller 
		call2Action.toggleClass('btn-md');
		// add spacing between call to action lists 
		call2ActionList.css('margin-bottom', '');

		// getinvolved volunteering 

		// move background picture downward (reset)
		volunteering.css('background-position-y', '-7rem');
		// unhide img galleries
		imgGal.css('display', '');
		


	}
});

// enquire small screen -> 
enquire.register("screen and (max-width: 480px)", {
	
	match: function () {

		// remove large button class 
		applyIn1.toggleClass('btn-lg');
		// add small button class
		applyIn1.toggleClass('btn-sm');
		// change position of index-hero image to the right
		indexHero.css('background-position-x', 'right');
		// change css of logo box to 9.5 rem
		logo.css({'height': '9.5rem', 'width': '9.5rem'});
		// add spacing between call to action lists 
		call2ActionList.css('margin-bottom', '2rem');

		// getinvolved volunteering
		// change position of background image of hero
		volunteering.css('background-position-x', 'center');

	},

	unmatch: function (){
		
		// remove small btn class
		applyIn1.toggleClass('btn-sm');
		// add small btn class
		applyIn1.toggleClass('btn-lg');
		// change position of index-hero image to the right
		indexHero.css('background-position-x', 'center');
		// visa versa logo box
		logo.css({'height': '', 'width': ''});
		// add spacing between call to action lists 
		call2ActionList.css('margin-bottom', '');
		// change position of background image of hero (reset)
		volunteering.css('background-position-x', 'center');

	}

});