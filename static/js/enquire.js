												// enquire baby!!
// select doms
			
// index
var applyIn1 = $('#index-apply-btn-1');
var indexHero = $('.index-hero');
var menuHeaderMob = $("#fh5co-header-section");
var logo = $('#fh5co-logo-word a div');
var call2Action = $('#call-to-action-btn');
var call2ActionList = $('.call-to-action-list-0');
var inGalImg = $('#fh5co-portfolio-list li');

// 	get involved

// volunteering 
var volunteering = $('.volunteering');
var volTextLg = $('#vol-text-more-then-992');
var volTextMd = $('#vol-text-between-769-and-992');

// enquire large screen <- 
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

// enquire 
// enquire medium screen in between 769px and 992px
enquire.register("screen and (min-width: 769px) and (max-width: 992px)", {
	match: function () {

		// volunteering
		// for screens bigger or equal to 769px hide Lg content
		volTextLg.css('display', 'none');
		// for screens inbetween 769 and 992 show md content
		volTextMd.css('display', 'contents');


	},
	unmatch: function(){
		// volunteering
		// for screens  outside of 769 and 992 display large contents
		volTextLg.css('display', '');
		// for screens inbetween 769 and 992 hide md content
		volTextMd.css('display', 'none');
	}
});

// enquire medium screen <= 768
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
		


	// get involved volunteering 
		// move background picture downward
		volunteering.css('background-position-y', '-10rem');
		// add display none to text-content of page
		volTextLg.css('display', 'none');





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
		// add display none to text-content of page
		// volTextLg.css('display', '');
		


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
		// changeaborder (top-left and right, bottom-left and right, remove border radius of second and third image) radius of first img and last image respectively
		$(inGalImg[0]).css('border-top-right-radius','1rem');
		$(inGalImg[1]).css('border-top-right-radius', '');
		$(inGalImg[2]).css('border-bottom-right-radius','');
		$(inGalImg[2]).css('border-bottom-left-radius','');
		$(inGalImg[3]).css('border-bottom-left-radius','1rem');

		// getinvolved volunteering
		// change position of background image of hero
		volunteering.css('background-position-x', 'center');
		// for screens  769px hide content
		volTextLg.css('display', 'none');

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
		// changeaborder (top-left and right, bottom-left and right, remove border radius of second and third image) radius of first img and last image respectively
		$(inGalImg[0]).css('border-top-right-radius','');
		$(inGalImg[1]).css('border-top-right-radius', '1rem');
		$(inGalImg[2]).css('border-bottom-right-radius','');
		$(inGalImg[2]).css('border-bottom-left-radius','1rem');
		$(inGalImg[3]).css('border-bottom-left-radius','');

		// volunteering
		// change position of background image of hero (reset)
		volunteering.css('background-position-x', 'center');
		// turn text content to display none
		


	}

});