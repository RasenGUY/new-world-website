												// enquire baby!!
// select doms
var applyIn1 = $('#index-apply-btn-1');
var indexHero = $('.index-hero');
var menuHeaderMob = $("#fh5co-header-section");
var logo = $('#fh5co-logo-word a div');
var call2Action = $('#call-to-action-btn');


// enquire medium screen
enquire.register("screen and (max-width: 768px)", {
	match: function () {

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




	},

	unmatch: function (){
		
		// remove small btn class
		applyIn1.toggleClass('btn-md');
		// add small btn class
		applyIn1.toggleClass('btn-lg');
		// change height back to norma
		menuHeaderMob.css('height', '');
		// visa versa logo box
		logo.css({'height': '', 'width': ''});
		// remove medium button class 
		call2Action.toggleClass('btn-sm');
		// change btn into smaller 
		call2Action.toggleClass('btn-md');


	}
});

// enquire small screen 
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
	}

});