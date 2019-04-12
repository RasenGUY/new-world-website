			// enquire baby!!
// select doms
// general
var allImages = $('.container.vol-img');


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
var volHero = $('.volunteering');
var volTextLg = $('#large-screen');
var volTextMd = $('#medium-screen');
var volTextTb = $('#tablet-screen');



// enquire large screen 
enquire.register("screen and (max-width: 2560px)", {
	match : function () {

		// get involved volunteering 
		// change hero background position 
		volHero.css('background-position-y', '-7rem');

	},
	unmatch: function () {
		// get involved volunteering 
		// change hero background image position reset
		volHero.css('background-position-y', '-20rem');

	}
});

// enquire normal 
enquire.register("screen and (max-width: 1024px)", {
	match: function () {

		// volunteering
		// for screens smaller then or equal to 1024px hide content for large screen
		volTextLg.css('display', 'none');
		// for screens smaller then or equal to 1024px show content for medium screen
		volTextMd.css('display', 'contents');
	},
	unmatch: function(){
		// volunteering
		// for screens bigger then or equal to 1024px show content for large screen
		volTextLg.css('display', 'contents');
		// for screens bigger then or equal to 1024px show content for medium screen
		volTextMd.css('display', '');

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

	// get involved 
		// volunteering
		// move hero background picture downward
		volHero.css('background-position-y', '0rem');
		// for screens smaller then or equal to 768px hide content for medium-screen
		volTextMd.css('display', 'none');
		// for screens smaller then or equal to 768px show content for tablet-screen
		volTextTb.css('display', 'contents');

		
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

		// getinvolved 
		//volunteering 
		// move background picture downward (reset)
		volHero.css('background-position-y', '-7rem');
		// for screen bigger then 768px show md-screen content 
		volTextTb.css('display', '');
		// and hide tablet screen content 
		volTextMd.css('display', 'contents');
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
		volHero.css({'background-position-x':'center', 'background-position-y':'2rem'});
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
		volHero.css('background-position-x', 'center');
		// turn text content to display none
		


	}

});



